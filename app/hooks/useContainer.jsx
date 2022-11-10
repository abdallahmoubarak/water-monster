import { graphQLClient } from "@/utils/graphQLInstance";
import { useMutation, useQuery } from "@tanstack/react-query";
import { client } from "pages/_app";
import {
  createContainerMutation,
  deleteContainerMutation,
  updateContainerMutation,
  userContainerQuery,
} from "./gql/container";

/*********************** getting user containers ***********************/

const getUserContainers = async (id) => {
  const variables = { id };
  const res = await graphQLClient.request(userContainerQuery, variables);
  return res?.containers;
};

export const useUserContainers = (id) => {
  return useQuery({
    queryKey: ["Containers"],
    queryFn: () => getUserContainers(id),
  });
};

/************************* create a container *************************/

const createContainer = async ({ id, name, size, address, date }) => {
  const variables = {
    id,
    name,
    size,
    address,
    date,
    title: "Installation",
    state: "approval",
  };
  const res = await graphQLClient.request(createContainerMutation, variables);
  return res?.updateUsers?.users[0]?.containers;
};

export const useCreateContainer = () => {
  return useMutation(createContainer, {
    onSuccess: (res) => client.setQueryData(["Containers"], res),
    onError: (err) => console.log(err.message),
  });
};

/************************* update a container *************************/

const updateContainer = async ({ id, name, size }) => {
  const variables = { container_id: id, name, size };
  const res = await graphQLClient.request(updateContainerMutation, variables);
  return res?.updateContainers?.containers;
};

export const useUpdateContainer = ({ setPage, setIsLoading }) => {
  return useMutation(updateContainer, {
    onSuccess: () => setPage("Containers"),
    onError: () => setIsLoading(false),
  });
};

/************************* delete a container *************************/

const deleteContainer = async (id) => {
  const variables = { container_id: id };
  const res = await graphQLClient.request(deleteContainerMutation, variables);
  console.log(res);
  return res;
};

export const useDeleteContainer = ({ setPage, setIsLoading }) => {
  return useMutation(deleteContainer, {
    onSuccess: () => setPage("Containers"),
    onError: () => setIsLoading(false),
  });
};
