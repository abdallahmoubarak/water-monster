import { gql, ApolloServer } from "apollo-server-micro";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

const users = [
  {
    id: "0i21jrief",
    name: "Kate Chopin",
  },
  {
    id: "asdfi0jafpsio",
    name: "Paul Auster",
  },
];

const typeDefs = gql`
  type User {
    id: ID
    name: String
    age: Int
  }

  type Query {
    getUsers: [User]
  }
`;

const resolvers = {
  Query: {
    getUsers: () => users,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const startServer = server.start();

export default async function handler(req, res) {
  await startServer;
  await server.createHandler({ path: "/api/graphql" })(req, res);
}
