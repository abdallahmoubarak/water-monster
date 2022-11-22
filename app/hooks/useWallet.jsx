import { graphQLClient } from "@/utils/graphQLInstance";
import { useMutation } from "@tanstack/react-query";
import { client } from "pages/_app";
import {
  cashMutation,
  chargeWalletMutation,
  createWalletMutation,
  payMutation,
  withdrawMutation,
} from "./gql/wallet";

/****************** create wallet  ******************/

const createWallet = async ({ id }) => {
  const variables = { id };
  const res = await graphQLClient.request(createWalletMutation, variables);
  return res;
};

export const useCreateWallet = ({ setIsLoading, setAlertMsg }) => {
  return useMutation(createWallet, {
    onError: (err) => console.log(err),
    onSuccess: () => {
      setIsLoading(false);
      client.refetchQueries(["User"]);
      setAlertMsg("Wallet created successfully!");
    },
  });
};

/****************** charge wallet  ******************/

const chargeWallet = async ({ id, amount }) => {
  const variables = { id, amount };
  const res = await graphQLClient.request(chargeWalletMutation, variables);
  return res;
};

export const useChargeWallet = ({ setAlertMsg, setAmount, setIsLoading }) => {
  return useMutation(chargeWallet, {
    onError: (err) => console.log(err),
    onSuccess: () => {
      setIsLoading(false);
      setAmount("");
      client.refetchQueries(["User"]);
      setAlertMsg("Charging done!");
    },
  });
};

/****************** charge wallet  ******************/

const withdrawWallet = async ({ id, amount }) => {
  const variables = { id, amount };
  const res = await graphQLClient.request(withdrawMutation, variables);
  return res;
};

export const useWithdrawMutation = ({
  setAlertMsg,
  setAmount,
  setIsLoading,
}) => {
  return useMutation(withdrawWallet, {
    onError: (err) => console.log(err),
    onSuccess: () => {
      setIsLoading(false);
      setAmount("");
      client.refetchQueries(["User"]);
      setAlertMsg("Withdraw done!");
    },
  });
};

/****************** Pay Mutation  ******************/

const pay = async ({ req_id, payer_wallet_id, payed_wallet_id, amount }) => {
  const variables = { req_id, payer_wallet_id, payed_wallet_id, amount };
  const res = await graphQLClient.request(payMutation, variables);
  return res;
};

export const usePayMutation = ({ setIsLoading, setAlertMsg }) => {
  return useMutation(pay, {
    onError: (err) => console.log(err),
    onSuccess: () => {
      setIsLoading(false);
      setAlertMsg("Payment done!");
      client.refetchQueries(["FillingHistory"]);
    },
  });
};

/****************** Cash Mutation  ******************/

const cash = async ({ req_id }) => {
  const variables = { req_id };
  const res = await graphQLClient.request(cashMutation, variables);
  return res;
};

export const useCashMutation = ({ setIsLoading, setAlertMsg }) => {
  return useMutation(cash, {
    onError: (err) => console.log(err),
    onSuccess: () => {
      setIsLoading(false);
      setAlertMsg("Payment done!");
      client.refetchQueries(["FillingHistory"]);
    },
  });
};
