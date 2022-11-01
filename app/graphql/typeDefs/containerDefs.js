import { gql } from "apollo-server-micro";

export const containerDefs = gql`
  type Container {
    id: ID! @id
    name: String
    size: Int
    location: Point
    current_level: Int
    sensor_state: Boolean
    private_mode: Boolean
    filling_mode: Boolean
    user: User! @relationship(type: "OWNS", direction: IN)
  }
`;
