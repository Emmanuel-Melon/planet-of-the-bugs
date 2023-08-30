import { gql } from "@apollo/client/core";

export const CREATE_LESSON = gql`
  mutation insertLessonsOne($lessonInput: lessons_insert_input!) {
    insert_lessons_one(object: $lessonInput) {
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

export const ADD_LESSON = gql`
  mutation addNewLesson($lessonInput: lessons_insert_input!) {
    insert_lessons_one(object: $lessonInput) {
      content
      description
      index
      title
      type
      XP
      chapter_id
      created_at
      id
    }
  }
`;

export const UPDATE_LESSON_DETAILS = gql`
  mutation updateLessonByPK(
    $id: uuid = ""
    $description: String = ""
    $title: String = ""
    $type: String = ""
  ) {
    update_lessons_by_pk(
      pk_columns: { id: $id }
      _set: { XP: 10, description: $description, title: $title, type: $type }
    ) {
      title
    }
  }
`;
