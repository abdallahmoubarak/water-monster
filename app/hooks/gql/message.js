import { gql } from "graphql-request";

export const createMessageMutation = gql`
  mutation ($to: ID!, $from: ID!, $content: String!) {
    createMessages(
      input: {
        from: { connect: { where: { node: { id: $from } } } }
        to: { connect: { where: { node: { id: $to } } } }
        content: $content
      }
    ) {
      messages {
        content
      }
    }
  }
`;
