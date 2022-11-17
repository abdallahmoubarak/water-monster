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
        phone
        type
        profile_url
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
        phone
        type
        profile_url
        wallet {
          id
          amount
        }
      }
    }
  }
`;

export const meQuery = gql`
  query {
    me {
      id
      name
      email
      phone
      type
      profile_url
      wallet {
        id
        amount
      }
    }
  }
`;
