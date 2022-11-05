import { GraphQLClient } from "graphql-request";
import { client } from "pages/_app";

const endpoint = "http://localhost:3000/api/graphql";

export const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: Boolean(client.getQueryData(["JWT"]))
      ? `Bearer ${client.getQueryData(["JWT"])}`
      : undefined,
    "Content-Type": "application/json",
  },
});
