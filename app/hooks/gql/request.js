import { gql } from "graphql-request";

export const requestsQuery = gql`
  query {
    requests {
      title
      createdAt
    }
  }
`;
