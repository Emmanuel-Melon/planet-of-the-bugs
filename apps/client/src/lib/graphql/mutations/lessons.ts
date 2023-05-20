import {
    gql,
    // @ts-ignore
  } from "@apollo/client/core/core.cjs";

export const CREATE_LESSON = gql`
  mutation insertLessonsOne($lessonInput: lessons_insert_input!) {
    insert_lessons_one(object: $lessonInput)  {
        XP
        chapter_id
        created_at
        description
        id
        title
        type
        updated_at
        content
    }
  }
`;