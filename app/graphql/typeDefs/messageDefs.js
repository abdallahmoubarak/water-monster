import { gql } from "apollo-server-micro";

export const messageDefs = gql`
  type Message {
    id: ID! @id
    content: String
    user: User @relationship(type: "RECEIVES", direction: OUT)
    createdAt: DateTime! @timestamp(operations: [CREATE])
    updatedAt: DateTime! @timestamp(operations: [CREATE, UPDATE])
  }
`;
