import { graphQLClient } from "@/utils/graphQLInstance";
import { useMutation, useQuery } from "@tanstack/react-query";
import { meQuery, signInMutation, signUpMutation } from "./gql/auth";
import { client } from "pages/_app";

/*********************** useSignUp hook ***********************/

const signUp = async ({ type, name, email, password }) => {
  const variables = { name, email, password, type };
  const res = await graphQLClient.request(signUpMutation, variables);
  return res?.signUp;
};

export const useSignUp = ({ setMsg, setIsLoading }) => {
  return useMutation(signUp, {
    onSuccess: (res) => {
      localStorage.setItem("JWT", res?.token);
      localStorage.setItem("User", JSON.stringify(res?.user));
      client.setQueryData(["User"], res?.user);
      graphQLClient.setHeaders({
        authorization: `Bearer ${res?.token}`,
        "Content-Type": "application/json",
      });
    },
    onError: (err) => {
      setMsg(err.message);
      setIsLoading(false);
    },
  });
};

/************************ useSignIn hook ************************/

const signIn = async ({ email, password }) => {
  const variables = { email, password };
  const res = await graphQLClient.request(signInMutation, variables);
  return res?.signIn;
};

export const useSignIn = ({ setMsg, setIsLoading }) => {
  return useMutation(signIn, {
    onSuccess: (res) => {
      localStorage.setItem("JWT", res?.token);
      localStorage.setItem("User", JSON.stringify(res?.user));
      client.setQueryData(["User"], res?.user);
      graphQLClient.setHeaders({
        authorization: `Bearer ${res?.token}`,
        "Content-Type": "application/json",
      });
    },
    onError: (err) => {
      setMsg(err.message);
      setIsLoading(false);
    },
  });
};

/****************** get current user using jwt *******************/

const getUser = async () => {
  const res = await graphQLClient.request(meQuery);
  return res?.me;
};

export const useCurrentUser = ({ enabled }) => {
  return useQuery({
    queryKey: ["User"],
    queryFn: () => getUser(),
    onSuccess: () => localStorage.setItem("User", JSON.stringify(res?.user)),
    refetchOnWindowFocus: false,
    enabled,
  });
};
