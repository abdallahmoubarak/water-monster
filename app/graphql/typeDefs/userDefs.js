import { gql } from "apollo-server-micro";

export const userDefs = gql`
  type User {
    id: ID! @id
    name: String!
    email: String!
    password: String! @auth(rules: [{ allow: { id: "$jwt.sub" } }]) @private
    type: String!
    phone: String
    profile_url: String
    language: String
    location: Point
    palet_number: String
    sent_messages: [Message!]! @relationship(type: "FROM", direction: OUT)
    received_messages: [Message!]! @relationship(type: "TO", direction: IN)
    containers: [Container!]! @relationship(type: "OWNS", direction: OUT)
    created_requests: [Request!]!
      @relationship(type: "CREATED_BY", direction: IN)
    provided_requests: [Request!]!
      @relationship(type: "PROVIDED_BY", direction: IN)
    wallet: Wallet @relationship(type: "OWNED_BY", direction: IN)
    createdAt: DateTime! @timestamp(operations: [CREATE])
    updatedAt: DateTime! @timestamp(operations: [CREATE, UPDATE])
  }

  extend type User @exclude(operations: [CREATE, DELETE])

  type AuthRes @exclude {
    user: User
    token: String!
  }

  type Mutation {
    signUp(
      name: String!
      email: String!
      password: String!
      type: String!
    ): AuthRes!
    signIn(email: String!, password: String!): AuthRes!
  }

  type Query {
    me: User
      @cypher(statement: "MATCH (u:User { id: $auth.jwt.sub }) RETURN u")
      @auth(rules: [{ isAuthenticated: true }])
  }
`;
