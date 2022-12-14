import { graphQLClient } from "@/utils/graphQLInstance";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getAdminQuery,
  getContactsQuery,
  getUsersQuery,
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

export const useUpdateName = ({ setAlertMsg }) => {
  return useMutation(updateName, {
    onSuccess: (res) => {
      localStorage.setItem("User", res?.user);
      client.setQueryData(["User"], res?.user);
      setAlertMsg("Name updated");
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

export const useUpdatePhone = ({ setAlertMsg }) => {
  return useMutation(updatePhone, {
    onSuccess: (res) => {
      localStorage.setItem("User", res?.user);
      client.setQueryData(["User"], res?.user);
      setAlertMsg("Phone updated");
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

/*********************** use get contacts hook ***********************/

const getContacts = async ({ id }) => {
  const variables = { me: id };
  const res = await graphQLClient.request(getContactsQuery, variables);
  return res?.users;
};

export const useGetContacts = ({ id }) => {
  return useQuery({
    queryFn: () => getContacts({ id }),
    queryKey: ["Contacts"],
    onError: (err) => console.log(err),
  });
};

/*********************** use get contacts hook ***********************/

const getUsers = async () => {
  const res = await graphQLClient.request(getUsersQuery);
  return res?.users;
};

export const useGetUsers = () => {
  return useQuery({
    queryFn: () => getUsers(),
    queryKey: ["Users"],
    onError: (err) => console.log(err),
  });
};
