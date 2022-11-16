import { gql } from "apollo-server-micro";

export const requestDefs = gql`
  type Request {
    id: ID! @id
    title: String!
    state: String
    date: Date
    initial_state: Float
    final_state: Float
    container: Container @relationship(type: "REQUESTED_FOR", direction: OUT)
    creator: User! @relationship(type: "CREATED_BY", direction: OUT)
    provider: [User!]! @relationship(type: "PROVIDED_BY", direction: OUT)
    createdAt: DateTime! @timestamp(operations: [CREATE])
    updatedAt: DateTime! @timestamp(operations: [CREATE, UPDATE])
  }
`;
