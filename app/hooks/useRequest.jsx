import { graphQLClient } from "@/utils/graphQLInstance";
import { useMutation, useQuery } from "@tanstack/react-query";
import { client } from "pages/_app";
import {
  acceptRequestMutation,
  createFillingRequestMutation,
  requestsQuery,
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
