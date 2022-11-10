import { makeAugmentedSchema } from "@neo4j/graphql";
import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";

export const augmentedSchema = makeAugmentedSchema({
  typeDefs,
  resolvers,
  debug: true,
});
