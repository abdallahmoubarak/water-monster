import { GraphQLClient } from "graphql-request";
import { client } from "pages/_app";

const endpoint = process.env.NEXT_PUBLIC_ENDPOINT;

export const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: Boolean(client.getQueryData(["JWT"]))
      ? `Bearer ${client.getQueryData(["JWT"])}`
      : undefined,
    "Content-Type": "application/json",
  },
});
