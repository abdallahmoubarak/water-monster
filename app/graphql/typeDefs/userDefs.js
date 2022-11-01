import { gql } from "apollo-server-micro";

export const userDefs = gql`
  type User {
    id: ID! @id
    name: String!
    email: String!
    password: String!
    phone: String
    profile_url: String
    language: String
    location: Point
    palet_number: String
    messages: [Message!]! @relationship(type: "SENT", direction: OUT)
    containers: [Container!]! @relationship(type: "OWNS", direction: OUT)
    createdAt: DateTime! @timestamp(operations: [CREATE])
    updatedAt: DateTime! @timestamp(operations: [CREATE, UPDATE])
  }
`;
