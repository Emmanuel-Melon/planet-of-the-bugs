import { gql } from "@apollo/client/core";

export const FETCH_LESSON_BY_PK = gql`
  query fetchNotifications($id: uuid!) {
    notifications {
      id
      type
      content
      timestamp
      isRead
    }
  }
`;
