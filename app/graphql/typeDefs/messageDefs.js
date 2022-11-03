import { gql } from "apollo-server-micro";

export const messageDefs = gql`
  type Message {
    id: ID! @id
    content: String
    user: User @relationship(type: "RECEIVES", direction: OUT)
    createdAt: DateTime! @timestamp(operations: [CREATE])
    updatedAt: DateTime! @timestamp(operations: [CREATE, UPDATE])
  }

  extend type Message{
    @auth(rules: [{ operations: [READ], where: { user: "$jwt.sub" } }])
  }
`;
