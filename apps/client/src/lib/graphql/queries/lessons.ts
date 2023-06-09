import {
  gql,
  // @ts-ignore
  // @ts-nocheck
} from "@apollo/client/core/core.cjs";

export const FETCH_LESSON_BY_PK = gql`
  query fetchLessonByPK($id: uuid!) {
    lessons_by_pk(id: $id) {
      title
      XP
      created_at
      description
      id
      type
      updated_at
      content
    }
  }
`;
