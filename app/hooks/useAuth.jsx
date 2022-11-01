import { graphQLClient } from "@/utils/graphQLInstance";
import { useQuery } from "@tanstack/react-query";
import { gql } from "graphql-request";

const getUser = async () => {
  const UserQuery = gql`
    query {
      users {
        id
        name
      }
    }
  `;
  const a = await graphQLClient.request(UserQuery);
  console.log(a.users[0]);
  return a.users[0];
};

export const useCurrentUser = ({ enabled }) => {
  return useQuery({
    queryKey: ["User"],
    queryFn: () => getUser(),
    refetchOnWindowFocus: false,
    enabled,
  });
};
