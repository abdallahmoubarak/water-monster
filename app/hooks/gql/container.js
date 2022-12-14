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
      requests(
        where: {
          OR: [
            { title: "Installation" }
            { title: "Filling", state_NOT: "done" }
          ]
        }
      ) {
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
    createContainers(
      input: [
        {
          name: $name
          size: $size
          address: $address
          requests: {
            create: {
              node: {
                state: $state
                title: $title
                date: $date
                creator: { connect: { where: { node: { id: $id } } } }
              }
            }
          }
          user: { connect: { where: { node: { id: $id } } } }
        }
      ]
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
        requests(
          where: {
            OR: [
              { title: "Installation" }
              { title: "Filling", state_NOT: "done" }
            ]
          }
        ) {
          title
          state
          date
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
        requests(
          where: {
            OR: [
              { title: "Installation" }
              { title: "Filling", state_NOT: "done" }
            ]
          }
        ) {
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
      delete: { requests: { where: {} } }
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

export const getMapContainersQuery = gql`
  query {
    containers(
      where: {
        OR: [
          { private_mode: false, manual_mode: true }
          { private_mode: false, manual_mode: false }
          { requests_SINGLE: { state_NOT: "done" } }
        ]
      }
    ) {
      id
      name
      location {
        longitude
        latitude
      }
      size
      sensor_state
      water_level
      user {
        id
        name
        profile_url
      }
      requests(where: { title: "Filling", state_NOT: "done" }) {
        id
        state
        provider {
          id
        }
      }
    }
  }
`;
