import { graphQLClient } from "@/utils/graphQLInstance";
import { useMutation } from "@tanstack/react-query";
import { gql } from "graphql-request";
import { client } from "pages/_app";

const signUp = async ({ type, name, email, password }) => {
  const signUp = gql`
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
  const variables = {
    name,
    email,
    password,
    type,
  };
  const res = await graphQLClient.request(signUp, variables);
  return res.signUp;
};

export const useSignUp = (setMsg) => {
  return useMutation(signUp, {
    onSuccess: (res) => {
      localStorage.setItem("JWT", res?.token);
      localStorage.setItem("User", res?.user);
      client.setQueryData(["JWT"], res?.token);
      client.setQueryData(["User"], res?.user);
    },
    onError: (err) => {
      setMsg(err.message);
    },
  });
};
