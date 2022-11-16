import { graphQLClient } from "@/utils/graphQLInstance";
import { useMutation, useQuery } from "@tanstack/react-query";
import { client } from "pages/_app";
import {
  chargeWalletMutation,
  createWalletMutation,
  withdrawMutation,
} from "./gql/wallet";

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

/****************** charge wallet  ******************/

const chargeWallet = async ({ id, amount }) => {
  const variables = { id, amount };
  const res = await graphQLClient.request(chargeWalletMutation, variables);
  return res;
};

export const useChargeWallet = ({ setAmount, setIsLoading }) => {
  return useMutation(chargeWallet, {
    onError: (err) => console.log(err),
    onSuccess: () => {
      setIsLoading(false);
      setAmount("");
      client.refetchQueries(["User"]);
    },
  });
};

/****************** charge wallet  ******************/

const withdrawWallet = async ({ id, amount }) => {
  const variables = { id, amount };
  const res = await graphQLClient.request(withdrawMutation, variables);
  return res;
};

export const useWithdrawMutation = ({ setAmount, setIsLoading }) => {
  return useMutation(withdrawWallet, {
    onError: (err) => console.log(err),
    onSuccess: () => {
      setIsLoading(false);
      setAmount("");
      client.refetchQueries(["User"]);
    },
  });
};
