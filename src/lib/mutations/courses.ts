import {
  gql,
  // @ts-ignore
} from "@apollo/client/core/core.cjs";

export const START_COURSE = gql`
  mutation startCourse($course_id: uuid, $user_id: uuid) {
    insert_user_courses(
      objects: { course_id: $course_id, user_id: $user_id, status: Subscribed }
    ) {
      affected_rows
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
