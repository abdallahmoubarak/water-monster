import { graphQLClient } from "@/utils/graphQLInstance";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createMessageMutation } from "./gql/message";
import { client } from "pages/_app";

/*********************** use create message hook ***********************/

const createMessage = async ({ from, to, content }) => {
  const variables = { from, to, content };
  const res = await graphQLClient.request(createMessageMutation, variables);
  return res?.createMessage?.messages[0];
};

export const useCreateMessage = () => {
  return useMutation(createMessage, {
    onSuccess: (res) => console.log(res),
    onError: (err) => console.log(err),
  });
};
