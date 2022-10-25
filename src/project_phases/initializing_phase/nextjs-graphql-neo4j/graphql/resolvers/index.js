import { userQueries, userMutations } from "./user";
import { containerQueries } from "./container";

const resolvers = {
  Query: {
    ...userQueries,
    ...containerQueries,
  },
  // Mutation: {
  //   ...userMutations,
  // },
};

export default resolvers;
