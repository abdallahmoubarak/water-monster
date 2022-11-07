import { graphQLClient } from "@/utils/graphQLInstance";
import { useMutation, useQuery } from "@tanstack/react-query";
import { updateNameMutation, updatePhoneMutation } from "./gql/user";
import { client } from "pages/_app";

/*********************** use update name hook ***********************/

const updateName = async ({ id, name }) => {
  const variables = { id, name };
  const res = await graphQLClient.request(updateNameMutation, variables);
  return res?.updateName;
};

export const useUpdateName = () => {
  return useMutation(updateName, {
    onSuccess: (res) => {
      localStorage.setItem("User", res?.user);
      client.setQueryData(["User"], res?.user);
    },
    onError: (err) => console.log(err),
  });
};

/*********************** use update phone hook ***********************/

const updatePhone = async ({ id, phone }) => {
  const variables = { id, phone };
  const res = await graphQLClient.request(updatePhoneMutation, variables);
  return res?.updatePhone;
};

export const useUpdatePhone = () => {
  return useMutation(updatePhone, {
    onSuccess: (res) => {
      localStorage.setItem("User", res?.user);
      client.setQueryData(["User"], res?.user);
    },
    onError: (err) => console.log(err),
  });
};
