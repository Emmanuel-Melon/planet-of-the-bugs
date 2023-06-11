import {
  gql,
  // @ts-ignore
} from "@apollo/client/core/core.cjs";

export const ADD_CHAPTER = gql`
mutation addNewChapter($chapterInput: course_chapters_insert_input!) {
  insert_course_chapters_one(object: $chapterInput) {
    id
    course_id
    title
    index
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



export const CREATE_COURSE = gql`
  mutation insertCoursesOne($courseInput: courses_insert_input!) {
    insert_courses_one(object: $courseInput)  {
      complexity
      description
      created_at
      id
      slug
      title
    }
  }
`;


export const DELETE_COURSE = gql`
mutation deleteCourse($id: uuid, $creator: uuid) {
  delete_courses(where: {id: {_eq: $id}, _and: {creator: {_eq: $creator}}}) {
    returning {
      user_courses {
        id
      }
    }
  }
}
`;


export const START_COURSE = gql`
  mutation startCourse($course_id: uuid, $user_id: uuid) {
    insert_user_courses(
      objects: { course_id: $course_id, user_id: $user_id, status: Subscribed }
    ) {
      affected_rows
    }
  }
`;