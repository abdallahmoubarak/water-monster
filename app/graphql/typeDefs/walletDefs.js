import { gql } from "apollo-server-micro";

export const walletDefs = gql`
  type Wallet {
    id: ID! @id
    amount: Float
    owner: User @relationship(type: "OWNED_BY", direction: OUT)
    wallet: Wallet @relationship(type: "TRANSFORM", direction: OUT)
    createdAt: DateTime! @timestamp(operations: [CREATE])
    updatedAt: DateTime! @timestamp(operations: [CREATE, UPDATE])
  }
`;
