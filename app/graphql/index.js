import { ApolloServer } from "apollo-server-micro";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";
import { Neo4jGraphQL } from "@neo4j/graphql";
import { Neo4jGraphQLAuthJWTPlugin } from "@neo4j/graphql-plugin-auth";
import neo4j from "neo4j-driver";
import { OGM } from "@neo4j/graphql-ogm";
import "ts-tiny-invariant";

export const driver = neo4j.driver(
  process.env.NEXT_PUBLIC_NEO4J_URI,
  neo4j.auth.basic(
    process.env.NEXT_PUBLIC_NEO4J_USER,
    process.env.NEXT_PUBLIC_NEO4J_PASSWORD,
  ),
);

const ogm = new OGM({ typeDefs, driver });
ogm.init();
export const User = ogm.model("User");

const neoSchema = new Neo4jGraphQL({ typeDefs, resolvers, driver });

export const server = new ApolloServer({
  schema: await neoSchema.getSchema(),
  context: ({ req }) => ({ req }),
  playground: true,
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground,
    {
      auth: new Neo4jGraphQLAuthJWTPlugin({
        secret: process.env.NEXT_PUBLIC_JWT_SECRET,
      }),
    },
  ],
});
