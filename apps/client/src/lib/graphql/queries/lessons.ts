import {
  gql
} from "@apollo/client/core";

export const FETCH_LESSON_BY_PK = gql`
  query fetchLessonByPK($id: uuid!) {
    lessons_by_pk(id: $id) {
      title
      XP
      description
      id
      type
      content
      chapter_id
      index
    }
  }
`;
