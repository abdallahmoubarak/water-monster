import { gql } from "apollo-server-micro";

export const transactionDefs = gql`
  type Transaction {
    id: ID! @id
    amount: Float
    for: Request @relationship(type: "PAYED_FOR", direction: OUT)
    from: Wallet @relationship(type: "FROM", direction: IN)
    to: Wallet @relationship(type: "TO", direction: OUT)
    createdAt: DateTime! @timestamp(operations: [CREATE])
    updatedAt: DateTime! @timestamp(operations: [CREATE, UPDATE])
  }
`;
