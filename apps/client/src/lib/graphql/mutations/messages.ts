import { gql } from "@apollo/client/core";

export const INSERT_NEW_CHAT = gql`
    mutation startNewChat($chatInput: course_chapters_insert_input!) {
        insert_chats_one(object: $chatInput) {
        id
      }
    }
`;

export const INSERT_NEW_MESSAGE = gql`
  mutation sendChatMessage($messageInput: course_chapters_insert_input!) {
    insert_chat_messages_one(object: $messageInput) {
      id
    }
  }
`;