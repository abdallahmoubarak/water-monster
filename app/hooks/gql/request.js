import { gql } from "graphql-request";

export const requestsQuery = gql`
  query {
    requests(options: { sort: { createdAt: DESC } }) {
      id
      title
      createdAt
      state
      date
      creator {
        name
        profile_url
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
        provider: { connect: { where: { node: { id: $provider_id } } } }
      }
    ) {
      requests {
        id
      }
    }
  }
`;

export const startFillingMutation = gql`
  mutation ($provider_id: ID!, $request_id: ID!, $empty_level: Float!) {
    updateRequests(
      where: { id: $request_id }
      update: {
        state: "done"
        initial_state: $empty_level
        provider: { connect: { where: { node: { id: $provider_id } } } }
      }
    ) {
      requests {
        id
      }
    }
  }
`;

export const userFillingRequestsQuery = gql`
  query ($id: ID!) {
    requests(
      where: { AND: [{ title: "Filling" }, { creator: { id: $id } }] }
      options: { sort: { createdAt: DESC } }
    ) {
      id
      initial_state
      payment_method
      container {
        id
        name
      }
      provider {
        name
        wallet {
          id
        }
      }
      createdAt
      updatedAt
    }
  }
`;
