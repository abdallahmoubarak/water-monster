import { graphQLClient } from "@/utils/graphQLInstance";
import { useMutation, useQuery } from "@tanstack/react-query";
import { gql } from "graphql-request";
import { client } from "pages/_app";

const signUp = async ({ type, name, email, password }) => {
  const signUpMutation = gql`
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
  const res = await graphQLClient.request(signUpMutation, variables);
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

const getUser = async () => {
  const me = gql`
    query {
      me {
        id
        name
        email
        type
      }
    }
  `;
  const res = await graphQLClient.request(me);
  console.log(res.me);
  return res.me;
};

export const useCurrentUser = ({ enabled }) => {
  return useQuery({
    queryKey: ["User"],
    queryFn: () => getUser(),
    refetchOnWindowFocus: false,
    enabled,
  });
};
