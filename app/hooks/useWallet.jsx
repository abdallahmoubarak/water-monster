import { graphQLClient } from "@/utils/graphQLInstance";
import { useMutation, useQuery } from "@tanstack/react-query";
import { client } from "pages/_app";
import { createWalletMutation } from "./gql/wallet";

/****************** create wallet  ******************/

const createWallet = async ({ id }) => {
  const variables = { id };
  const res = await graphQLClient.request(createWalletMutation, variables);
  return res;
};

export const useCreateWallet = () => {
  return useMutation(createWallet, {
    onError: (err) => console.log(err),
    onSuccess: () => client.refetchQueries(["User"]),
  });
};
