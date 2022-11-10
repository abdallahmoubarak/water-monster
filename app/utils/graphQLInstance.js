import { GraphQLClient } from "graphql-request";

const endpoint = process.env.NEXT_PUBLIC_ENDPOINT;

export const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: Boolean(
      typeof window !== "undefined" && localStorage.getItem("JWT"),
    )
      ? `Bearer ${typeof window !== "undefined" && localStorage.getItem("JWT")}`
      : undefined,
    "Content-Type": "application/json",
  },
});
