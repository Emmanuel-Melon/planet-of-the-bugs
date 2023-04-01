import {
  gql,
  // @ts-ignore
} from '@apollo/client/core/core.cjs';

export const FETCH_LESSON_BY_PK = gql`
  query fetchLessonByPK($id: uuid!) {
    lessons_by_pk(id: $id) {
      title
      XP
      created_at
      description
      id
      type
      chapter_id
      index
      updated_at
    }
  }
`;

export const FETCH_LESSON_BY_INDEX = gql`
  query fetchLessonByIndex($chapter_id: uuid, $new_index: Int) {
    lessons(
      where: { chapter_id: { _eq: $chapter_id }, index: { _eq: $new_index } }
    ) {
      id
      title
    }
  }
`;

export const FETCH_CHAPTER_LESSONS_COUNT = gql`
  query fetchChapterLessonsAggregate($chapter_id: uuid) {
    lessons_aggregate(where: { chapter_id: { _eq: $chapter_id } }) {
      aggregate {
        count
      }
    }
  }
`;
