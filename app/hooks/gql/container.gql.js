import { gql } from "graphql-request";

export const userContainerQuery = gql`
  query ($id: ID!) {
    users(where: { id: $id }) {
      containers {
        id
        name
        size
        sensor_state
        private_mode
        filling_mode
        pending
        location {
          longitude
          latitude
        }
      }
    }
  }
`;

export const createContainerMutation = gql`
  mutation ($id: ID!, $name: String!, $size: Int!) {
    updateUsers(
      where: { id: $id }
      update: { containers: { create: { node: { name: $name, size: $size } } } }
    ) {
      users {
        containers {
          id
          name
          size
          sensor_state
          private_mode
          filling_mode
        }
      }
    }
  }
`;
