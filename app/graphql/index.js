import { ApolloServer } from "apollo-server-micro";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";
import { Neo4jGraphQL } from "@neo4j/graphql";
import { Neo4jGraphQLAuthJWTPlugin } from "@neo4j/graphql-plugin-auth";
import neo4j from "neo4j-driver";
import { OGM } from "@neo4j/graphql-ogm";
import "ts-tiny-invariant";

const driver = neo4j.driver(
  process.env.NEXT_PUBLIC_NEO4J_URI,
  neo4j.auth.basic(
    process.env.NEXT_PUBLIC_NEO4J_USER,
    process.env.NEXT_PUBLIC_NEO4J_PASSWORD,
  ),
);

export const ogm = new OGM({ typeDefs, driver });
export const User = ogm.model("User");
export const Wallet = ogm.model("Wallet");
export const Transaction = ogm.model("Transaction");
export const Request = ogm.model("Request");

const neoSchema = new Neo4jGraphQL({
  typeDefs,
  resolvers,
  driver,
  introspection: true,
  plugins: {
    auth: new Neo4jGraphQLAuthJWTPlugin({
      secret: process.env.NEXT_PUBLIC_JWT_SECRET,
    }),
  },
});

export const server = new ApolloServer({
  schema: await neoSchema.getSchema(),
  playground: true,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  context: async (ctx) => {
    return {
      driver,
      ...ctx,
    };
  },
});
