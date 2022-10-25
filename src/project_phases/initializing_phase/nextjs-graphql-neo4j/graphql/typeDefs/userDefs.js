import { gql } from "apollo-server-micro";

export const userDefs = gql`
  type User {
    id: ID
    name: String
    age: Int
  }
`;
