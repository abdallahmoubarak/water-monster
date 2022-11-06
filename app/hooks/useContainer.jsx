import { graphQLClient } from "@/utils/graphQLInstance";
import { useMutation, useQuery } from "@tanstack/react-query";
import { userContainerQuery } from "./gql/container.gql";

const getUserContainers = async (id) => {
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

/*            request a container               */
