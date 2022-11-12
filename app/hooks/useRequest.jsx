import { graphQLClient } from "@/utils/graphQLInstance";
import { useMutation, useQuery } from "@tanstack/react-query";
import { client } from "pages/_app";
import { requestsQuery } from "./gql/request";

/*********************** getting user requests ***********************/

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
