import { createJWT, comparePassword, hashPassword } from "@/utils/jwt";

import { User } from "./index";

export const resolvers = {
  Mutation: {
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
      if (!user) throw new Error("Email or password is not correct!");
      const correctPassword = await comparePassword(password, user.password);
      if (!correctPassword)
        throw new Error("Email or password is not correct!");
      const token = await createJWT({ sub: user.id });

      return { user, token };
    },
  },
  Query: {
    myId(_source, _args, context) {
      return context.auth.jwt.sub;
    },
  },
};
