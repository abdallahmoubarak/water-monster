const { createJWT, comparePassword, hashPassword } = require("@/utils/jwt");

import { User } from "./index";

export const resolvers = {
  Mutation: {
    signUp: async (_root, { name, email, password }) => {
      const [existing] = await User.find({ where: { email } });
      if (existing) throw new Error(`User with email ${email} already exists!`);
      const hash = await hashPassword(password);
      const { users } = await User.create({
        input: [{ name, email, password: hash }],
      });
      console.log(users);
      const jwt = await createJWT({ sub: users[0].id });

      return jwt;
    },

    signIn: async (_root, { email, password }) => {
      const [user] = await User.find({ where: { email } });
      if (!user) throw new Error("Email or password is not correct!");
      const correctPassword = await comparePassword(password, user.password);
      if (!correctPassword)
        throw new Error("Email or password is not correct!");
      const jwt = await createJWT({ sub: user.id });
      return jwt;
    },
  },
};
