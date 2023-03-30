import {
  gql,
  // @ts-ignore
} from "@apollo/client/core/core.cjs";

export const FETCH_COURSE_BY_PK = gql`
  query fetchLessonByPK($id: uuid!) {
    lessons_by_pk(id: $id) {
      title
      XP
      created_at
      description
      id
      type
      updated_at
    }
  }
`;
