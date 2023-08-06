import { INSERT_NEW_CHAT, INSERT_NEW_MESSAGE } from "$lib/graphql/mutations/messages";
import { FETCH_CHAT_MESSAGES, FETCH_CHATS } from "$lib/graphql/queries/messages";
import { mutation, query } from 'svelte-apollo';
import type { FetchResult } from "@apollo/client/link/core/types";
import apolloClient from "$lib/graphql/apolloClient";

export const fetchChats = (userId: string): Promise<any[]> => {
  return apolloClient.query({
    query: FETCH_CHATS,
    variables: {
      userId
    }
  });
};

export const fetchMessages = (chatId: string) => {
  return apolloClient.query( {
    query: FETCH_CHAT_MESSAGES,
    variables: {
      chatId
    }
  });
};

export const sendChatMessage = (message: any): Promise<FetchResult<unknown>> => {
  const newMessageMutation = mutation(INSERT_NEW_MESSAGE);
  return newMessageMutation({
    variables: {
      ...message
    }
  });
};

export const startNewChat = async (chat: any): Promise<FetchResult<unknown>> => {
  const newChatMutation = mutation(INSERT_NEW_CHAT);
  return newChatMutation({
    variables: {
      ...chat
    }
  });
};