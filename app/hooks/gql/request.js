import { gql } from "graphql-request";

export const requestsQuery = gql`
  query {
    requests {
      title
      createdAt
      state
    }
  }
`;

export const createInstallationRequestMutation = gql`
  mutation (
    $id: ID!
    $name: String!
    $size: String!
    $date: Date!
    $address: String!
  ) {
    createRequests(
      input: [
        {
          title: "Installation"
          state: "approval"
          date: $date
          creator: { connect: { where: { node: { id: $id } } } }
          container: {
            create: {
              node: {
                name: $name
                size: $size
                address: $address
                user: { connect: { where: { node: { id: $id } } } }
              }
            }
          }
        }
      ]
    ) {
      requests {
        id
      }
    }
  }
`;
