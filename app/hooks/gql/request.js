import { gql } from "graphql-request";

export const requestsQuery = gql`
  query {
    requests {
      id
      title
      createdAt
      state
      date
      creator {
        name
      }
    }
  }
`;

export const acceptRequestMutation = gql`
  mutation ($id: ID!, $state: String!) {
    updateRequests(where: { id: $id }, update: { state: $state }) {
      requests {
        id
      }
    }
  }
`;
