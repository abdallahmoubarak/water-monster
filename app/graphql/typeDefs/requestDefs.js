import { gql } from "apollo-server-micro";

export const requestDefs = gql`
  type Request {
    id: ID! @id
    title: String!
    container: Container @relationship(type: "DONE_FOR", direction: OUT)
    createdAt: DateTime! @timestamp(operations: [CREATE])
    updatedAt: DateTime! @timestamp(operations: [CREATE, UPDATE])
  }
`;
