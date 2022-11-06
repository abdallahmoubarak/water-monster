import { gql } from "graphql-request";

export const signUpMutation = gql`
  mutation (
    $name: String!
    $email: String!
    $password: String!
    $type: String!
  ) {
    signUp(name: $name, email: $email, password: $password, type: $type) {
      token
      user {
        id
        name
        email
        type
      }
    }
  }
`;

export const signInMutation = gql`
  mutation ($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      token
      user {
        id
        name
        email
        profile_url
      }
    }
  }
`;

export const me = gql`
  query {
    me {
      id
      name
      email
      type
    }
  }
`;
