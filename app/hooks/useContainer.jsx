import { graphQLClient } from "@/utils/graphQLInstance";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  createContainerMutation,
  userContainerQuery,
} from "./gql/container.gql";

/*********************** getting user containers ***********************/

const getUserContainers = async (id) => {
  const variables = { id };
  const res = await graphQLClient.request(userContainerQuery, variables);
  return res.users[0].containers;
};

export const useUserContainers = (id) => {
  return useQuery({
    queryKey: ["Containers"],
    queryFn: () => getUserContainers(id),
  });
};

/************************* add a container *************************/

const createContainer = async ({ id, name, size }) => {
  const variables = { id, name, size };
  const res = await graphQLClient.request(createContainerMutation, variables);
  return res?.users?.containers;
};

export const useCreateContainer = () => {
  return useMutation(createContainer, {
    onSuccess: (res) => {
      client.setQueryData(["Containers"], res);
    },
    onError: (err) => console.log(err.message),
  });
};
