import { graphQLClient } from "@/utils/graphQLInstance";
import { useMutation, useQuery } from "@tanstack/react-query";
import { gql } from "graphql-request";
import { client } from "pages/_app";

const getUserContainers = async (id) => {
  const userContainerQuery = gql`
    query ($id: ID!) {
      users(where: { id: $id }) {
        containers {
          id
          name
          size
          sensor_state
          private_mode
          filling_mode
          pending
          location {
            longitude
            latitude
          }
        }
      }
    }
  `;
  const variables = {
    id,
  };
  const res = await graphQLClient.request(userContainerQuery, variables);
  return res.users[0].containers;
};

export const useUserContainers = (id) => {
  return useQuery({
    queryKey: ["Containers"],
    queryFn: () => getUserContainers(id),
  });
};
