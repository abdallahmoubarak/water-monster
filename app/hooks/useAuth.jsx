import { graphQLClient } from "@/utils/graphQLInstance";
import { useMutation, useQuery } from "@tanstack/react-query";
import { me, signInMutation, signUpMutation } from "./gql/auth.gql";
import { client } from "pages/_app";

const signUp = async ({ type, name, email, password }) => {
  const variables = { name, email, password, type };
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
    onError: (err) => setMsg(err.message),
  });
};

/*               signIn hook             */

const signIn = async ({ email, password }) => {
  const variables = { email, password };
  const res = await graphQLClient.request(signInMutation, variables);
  return res.signIn;
};

export const useSignIn = (setMsg) => {
  return useMutation(signIn, {
    onSuccess: (res) => {
      localStorage.setItem("JWT", res?.token);
      localStorage.setItem("User", res?.user);
      client.setQueryData(["JWT"], res?.token);
      client.setQueryData(["User"], res?.user);
    },
    onError: (err) => setMsg(err.message),
  });
};

/*         get current user using jwt         */

const getUser = async () => {
  const res = await graphQLClient.request(me);
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
