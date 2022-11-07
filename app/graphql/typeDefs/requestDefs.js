import { gql } from "apollo-server-micro";

export const requestDefs = gql`
  type Request {
    id: ID! @id
    title: String!
    state: String
    not_active: Boolean
    createdAt: DateTime! @timestamp(operations: [CREATE])
    updatedAt: DateTime! @timestamp(operations: [CREATE, UPDATE])
  }
`;
