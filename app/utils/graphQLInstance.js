import { GraphQLClient } from "graphql-request";

const endpoint = "http://localhost:3000/api/graphql";

export const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    // authorization: Boolean(localStorage.getItem("JWT"))
    //   ? `Bearer ${localStorage.getItem("JWT")}`
    //   : undefined,
    "Content-Type": "application/json",
  },
});
