import { graphQLClient } from "@/utils/graphQLInstance";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getAdminQuery,
  updateNameMutation,
  updatePhoneMutation,
} from "./gql/user";
import { client } from "pages/_app";

/*********************** use update name hook ***********************/

const updateName = async ({ id, name }) => {
  const variables = { id, name };
  const res = await graphQLClient.request(updateNameMutation, variables);
  return res?.updateUsers?.users[0];
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
  return res?.updateUsers?.users[0];
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

/*********************** use get Admin hook ***********************/

const getAdmin = async () => {
  const res = await graphQLClient.request(getAdminQuery);
  return res?.users;
};

export const useGetAdmin = () => {
  return useQuery({
    queryFn: () => getAdmin(),
    queryKey: ["Admin"],
    onError: (err) => console.log(err),
  });
};
