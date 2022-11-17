import { authMutations } from "./authResolvers";
import { walletMutations } from "./walletResolvers";
export const resolvers = {
  Mutation: {
    ...authMutations,
    ...walletMutations,
  },
  Query: {},
};
