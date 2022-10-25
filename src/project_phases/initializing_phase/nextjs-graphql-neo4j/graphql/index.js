import { ApolloServer } from "apollo-server-micro";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import schema from "./schema";

export const server = new ApolloServer({
  schema,
  playground: true,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
});
