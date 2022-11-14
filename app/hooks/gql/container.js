import { gql } from "graphql-request";

export const userContainerQuery = gql`
  query ($id: ID!) {
    containers(where: { user: { id: $id } }) {
      id
      name
      size
      sensor_state
      private_mode
      manual_mode
      water_level
      address
      installation_request {
        title
        state
        date
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
                create: {
                  node: {
                    title: $title
                    state: $state
                    date: $date
                    creator: { connect: { where: { node: { id: $id } } } }
                  }
                }
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
          manual_mode
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
        manual_mode
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

export const updatePrivateModeMutation = gql`
  mutation ($id: ID!, $private_mode: Boolean!) {
    updateContainers(
      where: { id: $id }
      update: { private_mode: $private_mode }
    ) {
      containers {
        id
      }
    }
  }
`;

export const updateManualModeMutation = gql`
  mutation ($id: ID!, $manual_mode: Boolean!) {
    updateContainers(
      where: { id: $id }
      update: { manual_mode: $manual_mode }
    ) {
      containers {
        id
      }
    }
  }
`;
