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

export const createFillingRequestMutation = gql`
  mutation ($user_id: ID!, $container_id: ID!) {
    createRequests(
      input: [
        {
          title: "Filling"
          state: "waiting"
          creator: { connect: { where: { node: { id: $user_id } } } }
          container: { connect: { where: { node: { id: $container_id } } } }
        }
      ]
    ) {
      requests {
        id
      }
    }
  }
`;

export const reserveRequestMutation = gql`
  mutation ($provider_id: ID!, $request_id: ID!) {
    updateRequests(
      where: { id: $request_id }
      update: {
        state: "reserved"
        providor: { connect: { where: { node: { id: $provider_id } } } }
      }
    ) {
      requests {
        id
      }
    }
  }
`;
