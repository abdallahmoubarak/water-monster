import { gql } from "apollo-server-micro";

export const containerDefs = gql`
  type Container {
    id: ID
    name: String
    size: Int
  }
`;
