import { ApolloServer } from "apollo-server-micro";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { typeDefs } from "./typeDefs";
import { Neo4jGraphQL } from "@neo4j/graphql";
import neo4j from "neo4j-driver";
require("dotenv").config();
import "ts-tiny-invariant";

const driver = neo4j.driver(
  process.env.NEO4J_URI,
  neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD),
);

const neoSchema = new Neo4jGraphQL({ typeDefs, driver });

export const server = new ApolloServer({
  schema: await neoSchema.getSchema(),
  playground: true,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
});
