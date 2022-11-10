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
    messages(
      where: {
        OR: [
          { from: { id: $me }, to: { id: $other } }
          { to: { id: $me }, from: { id: $other } }
        ]
      }
      options: { sort: { createdAt: ASC } }
    ) {
      content
      createdAt
      from {
        id
      }
    }
  }
`;
