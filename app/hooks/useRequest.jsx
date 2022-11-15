import { graphQLClient } from "@/utils/graphQLInstance";
import { useMutation, useQuery } from "@tanstack/react-query";
import { client } from "pages/_app";
import {
  acceptRequestMutation,
  createFillingRequestMutation,
  requestsQuery,
  reserveRequestMutation,
  startFillingMutation,
  userFillingRequestsQuery,
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

export const useFillingRequest = () => {
  return useMutation(fillingRequest, {
    onError: (err) => console.log(err),
  });
};

/*********************** reserve Filling request ***********************/

const reserveRequest = async ({ provider_id, request_id }) => {
  const variables = { provider_id, request_id };
  const res = await graphQLClient.request(reserveRequestMutation, variables);
  return res?.requests;
};

export const useReserveRequest = () => {
  return useMutation(reserveRequest, {
    onError: (err) => console.log(err),
  });
};

/*********************** start Filling  ***********************/

const startFilling = async ({ provider_id, request_id, empty_level }) => {
  const variables = { provider_id, request_id, empty_level };
  const res = await graphQLClient.request(startFillingMutation, variables);
  return res?.requests;
};

export const useStartFilling = () => {
  return useMutation(startFilling, {
    onError: (err) => console.log(err),
    onSuccess: () => client.refetchQueries(["MapContainers"]),
  });
};

/*********************** getting users filling requests ***********************/

const getUserFillingRequests = async ({ id }) => {
  const variables = { id };
  const res = await graphQLClient.request(userFillingRequestsQuery, variables);
  return res?.requests;
};

export const useGetUserFillingRequests = ({ id }) => {
  return useQuery({
    queryKey: ["FillingHistory"],
    queryFn: () => getUserFillingRequests({ id }),
  });
};
