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

export const getMessagesQuery = gql`
  query ($me: ID!, $other: ID!) {
    users(where: { id: $me }) {
      sent_messages(where: { to: { id: $other } }) {
        content
        createdAt
      }
      received_messages(where: { from: { id: $other } }) {
        content
        createdAt
      }
    }
  }
`;
