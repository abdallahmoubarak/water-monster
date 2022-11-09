import { graphQLClient } from "@/utils/graphQLInstance";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createMessageMutation, getMessagesQuery } from "./gql/message";
import { client } from "pages/_app";

/*********************** use create message hook ***********************/

const createMessage = async ({ from, to, content }) => {
  const variables = { from, to, content };
  const res = await graphQLClient.request(createMessageMutation, variables);
  return res?.createMessage?.messages[0];
};

export const useCreateMessage = () => {
  return useMutation(createMessage, {
    onSuccess: (res) => console.log(res),
    onError: (err) => console.log(err),
  });
};

/*********************** use create message hook ***********************/

const getMessages = async ({ me, other }) => {
  const variables = { me, other };
  const res = await graphQLClient.request(getMessagesQuery, variables);
  const sentMessages = res?.users[0]?.sent_messages.map((msg) => ({
    ...msg,
    id: me,
  }));
  const receivedMessages = res?.users[0]?.received_messages.map((msg) => ({
    ...msg,
    id: other,
  }));
  return [...sentMessages, ...receivedMessages].sort((a, b) => {
    var c = new Date(a.createdAt);
    var d = new Date(b.createdAt);
    return c - d;
  });
};

export const useGetMessages = ({ me, other, enabled }) => {
  return useQuery({
    queryKey: [`${other}`],
    queryFn: () => getMessages({ me, other }),
    onError: (err) => console.log(err),
    enabled,
  });
};
