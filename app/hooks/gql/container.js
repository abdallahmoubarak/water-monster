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
        water_level
        installation_request {
          title
          state
          date
        }
      }
    }
  }
`;

export const createContainerMutation = gql`
  mutation (
    $id: ID!
    $name: String!
    $size: String!
    $title: String!
    $state: String!
    $date: Date!
    $address: String!
  ) {
    updateUsers(
      where: { id: $id }
      update: {
        containers: {
          create: {
            node: {
              name: $name
              size: $size
              address: $address
              installation_request: {
                create: { node: { title: $title, state: $state, date: $date } }
              }
            }
          }
        }
      }
    ) {
      users {
        containers {
          id
          name
          size
          sensor_state
          private_mode
          filling_mode
          water_level
          installation_request {
            title
            state
            date
          }
        }
      }
    }
  }
`;
