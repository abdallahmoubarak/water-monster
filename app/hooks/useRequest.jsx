import { graphQLClient } from "@/utils/graphQLInstance";
import { useMutation, useQuery } from "@tanstack/react-query";
import { client } from "pages/_app";
import {
  acceptRequestMutation,
  clientFillingRequestsQuery,
  createFillingRequestMutation,
  providerFillingRequestsQuery,
  requestsQuery,
  reserveRequestMutation,
  startFillingMutation,
} from "./gql/request";

/*********************** getting users requests ***********************/

const getRequests = async () => {
  const res = await graphQLClient.request(requestsQuery);
  return res?.requests;
};

export const useRequests = () => {
  return useQuery({
    queryKey: ["Requests"],
    queryFn: () => getRequests(),
  });
};

/*********************** accept user request ***********************/

const acceptRequest = async ({ id, state }) => {
  const variables = { id, state };
  const res = await graphQLClient.request(acceptRequestMutation, variables);
  return res?.requests;
};

export const useAcceptRequest = () => {
  return useMutation(acceptRequest, {
    onSuccess: () => client.invalidateQueries("Requests"),
    onError: (err) => console.log(err),
  });
};

/*********************** create Filling request ***********************/

const fillingRequest = async ({ user_id, container_id }) => {
  const variables = { user_id, container_id };
  const res = await graphQLClient.request(
    createFillingRequestMutation,
    variables,
  );
  return res?.requests;
};

export const useFillingRequest = ({ setAlertMsg }) => {
  return useMutation(fillingRequest, {
    onError: (err) => console.log(err),
    onSuccess: () => setAlertMsg("Request done"),
  });
};

/*********************** reserve Filling request ***********************/

const reserveRequest = async ({ provider_id, request_id }) => {
  const variables = { provider_id, request_id };
  const res = await graphQLClient.request(reserveRequestMutation, variables);
  return res?.requests;
};

export const useReserveRequest = ({ setAlertMsg }) => {
  return useMutation(reserveRequest, {
    onError: (err) => console.log(err),
    onSuccess: () => setAlertMsg("Reserved for you"),
  });
};

/*********************** start Filling  ***********************/

const startFilling = async ({ provider_id, request_id, empty_level }) => {
  const variables = { provider_id, request_id, empty_level };
  const res = await graphQLClient.request(startFillingMutation, variables);
  return res?.requests;
};

export const useStartFilling = ({ setAlertMsg }) => {
  return useMutation(startFilling, {
    onError: (err) => console.log(err),
    onSuccess: () => {
      setAlertMsg("Filling");
      client.refetchQueries(["MapContainers"]);
    },
  });
};

/*********************** getting filling requests ***********************/

const getFillingRequests = async ({ id, userType }) => {
  const variables = { id };
  let res;
  switch (userType) {
    case "Provider":
      res = await graphQLClient.request(
        providerFillingRequestsQuery,
        variables,
      );
      break;
    case "Client":
      res = await graphQLClient.request(clientFillingRequestsQuery, variables);
      break;
  }
  return res?.requests;
};

export const useGetFillingRequests = ({ id, userType, enabled }) => {
  return useQuery({
    queryKey: ["FillingHistory"],
    queryFn: () => getFillingRequests({ id, userType }),
    enabled,
  });
};
