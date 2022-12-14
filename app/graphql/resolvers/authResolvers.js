import { createJWT, comparePassword, hashPassword } from "@/utils/jwt";

import { User } from "../index";
import { Wallet } from "../index";

export const authMutations = {
  signUp: async (_source, { name, email, password, type }) => {
    const [existing] = await User.find({ where: { email } });
    if (existing) throw new Error(`User with email ${email} already exists!`);
    const hash = await hashPassword(password);

    const { users } = await User.create({
      input: [
        {
          name,
          email,
          password: hash,
          type,
        },
      ],
    });
    const token = await createJWT({ sub: users[0].id });

    return { user: users[0], token };
  },

  signIn: async (_source, { email, password }) => {
    const [user] = await User.find({ where: { email } });
    const [wallet] = await Wallet.find({ where: { owner: { id: user.id } } });
    if (!user) throw new Error("Email or password is not correct!");
    const correctPassword = await comparePassword(password, user.password);
    if (!correctPassword) throw new Error("Email or password is not correct!");
    const token = await createJWT({ sub: user.id });

    return { user: { ...user, wallet }, token };
  },
};
