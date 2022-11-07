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
        address
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
          address
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

export const updateContainerMutation = gql`
  mutation ($container_id: ID!, $name: String!, $size: String!) {
    updateContainers(
      where: { id: $container_id }
      update: { name: $name, size: $size }
    ) {
      containers {
        id
        name
        size
        sensor_state
        private_mode
        filling_mode
        water_level
        address
        installation_request {
          title
          state
          date
        }
      }
    }
  }
`;

export const deleteContainerMutation = gql`
  mutation ($container_id: ID!) {
    deleteContainers(
      where: { id: $container_id }
      delete: { installation_request: { where: {} } }
    ) {
      nodesDeleted
      relationshipsDeleted
    }
  }
`;
