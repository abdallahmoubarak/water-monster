import { gql } from "apollo-server-micro";

export const requestDefs = gql`
  type Request {
    id: ID! @id
    title: String!
    state: String
    date: Date
    not_active: Boolean
    container: Container @relationship(type: "INSTALLING", direction: OUT)
    creator: User! @relationship(type: "CREATED_BY", direction: OUT)
    providor: [User!]! @relationship(type: "PROVIDED_BY", direction: OUT)
    createdAt: DateTime! @timestamp(operations: [CREATE])
    updatedAt: DateTime! @timestamp(operations: [CREATE, UPDATE])
  }
`;
