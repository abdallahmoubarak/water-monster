import { gql } from "apollo-server-micro";

export const containerDefs = gql`
  type Container {
    id: ID! @id
    name: String
    size: String
    location: Point
    address: String
    water_level: Int
    pending: String
    sensor_state: Boolean
    private_mode: Boolean
    filling_mode: Boolean
    installation_request: Request!
      @relationship(type: "INSTALLING", direction: IN)
    user: User! @relationship(type: "OWNS", direction: IN)
    createdAt: DateTime! @timestamp(operations: [CREATE])
    updatedAt: DateTime! @timestamp(operations: [CREATE, UPDATE])
  }
`;
