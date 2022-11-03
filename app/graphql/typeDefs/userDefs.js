import { gql } from "apollo-server-micro";

export const userDefs = gql`
  type User {
    id: ID! @id
    name: String!
    email: String!
    password: String! @auth(rules: [{ allow: { id: "$jwt.sub" } }])
    phone: String
    profile_url: String
    language: String
    location: Point
    palet_number: String
    messages: [Message!]! @relationship(type: "SENT", direction: OUT)
    containers: [Container!]! @relationship(type: "OWNS", direction: OUT)
    wallet: Wallet @relationship(type: "OWNED_BY", direction: IN)
    createdAt: DateTime! @timestamp(operations: [CREATE])
    updatedAt: DateTime! @timestamp(operations: [CREATE, UPDATE])
  }

  type AuthRes {
    user: User
    token: String!
  }

  type Mutation {
    signUp(name: String!, email: String!, password: String!): AuthRes!
    signIn(email: String!, password: String!): AuthRes!
  }
`;
