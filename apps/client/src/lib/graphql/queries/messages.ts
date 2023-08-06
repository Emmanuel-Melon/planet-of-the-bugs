import { gql } from "@apollo/client/core";

export const FETCH_CHAT_MESSAGES = gql`
  query fetchChatMessages($chatId: uuid!) {
    message(where: {chat_id: {_eq: $chatId}}) {
      created_at
      chat_id
      text
      user {
        id
        name
        username
      }
    }
  }
`;

export const FETCH_CHATS = gql`
  query fetchChats($userId: uuid!) {
    chats(limit: 10, order_by: {created_at: asc}) {
      id
      created_at
      updated_at
      chat_participants(where: {user: {id: {_neq: $userId }}}) {
        chat_id
        user {
          name
          username
          id
          email
          avatar
        }
      }
    }
  }
`;
