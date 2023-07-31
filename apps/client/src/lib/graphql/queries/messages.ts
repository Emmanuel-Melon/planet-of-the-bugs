import { gql } from "@apollo/client/core";

export const FETCH_LESSON_BY_PK = gql`
  query fetchMessages($id: uuid!) {
    messages {
      id
      sender {
        id
        name
        avatarUrl
      }
      content
      timestamp
      isRead
    }
  }
`;

export const FETCH_CHATS = gql`
  query fetchMessages($id: uuid!) {
    chats {
      chat_id
      participants {
        id
        name
        avatarUrl
      }
      last_message {
        message_id
        sender {
          id
          name
          avatarUrl
        }
        content
        timestamp
        is_read
      }
      created_at
      updated_at
    }
  }
`;
