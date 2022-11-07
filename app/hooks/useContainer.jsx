import { graphQLClient } from "@/utils/graphQLInstance";
import { useMutation, useQuery } from "@tanstack/react-query";
import { client } from "pages/_app";
import { createContainerMutation, userContainerQuery } from "./gql/container";

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
  console.log(res?.updateUsers?.users[0]?.containers);
  return res?.updateUsers?.users[0]?.containers;
};

export const useCreateContainer = () => {
  return useMutation(createContainer, {
    onSuccess: (res) => client.setQueryData(["Containers"], res),
    onError: (err) => console.log(err.message),
  });
};
