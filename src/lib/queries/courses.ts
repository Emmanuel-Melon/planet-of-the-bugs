import {
  gql,
  // @ts-ignore
} from '@apollo/client/core/core.cjs';

const COURSE_FIELDS_FRAGMENT = gql`
  fragment CourseFields on Course {
    id
    name
    description
    creator
    complexity
    slug
  }
`;

export const FETCH_COURSES = gql`
  query fetchCourses {
    courses {
      id
      name
      description
      creator
      complexity
      slug
    }
  }
`;

export const FETCH_COURSE_BY_SLUG = gql`
  query fetchCourseBySlug($slug: String) {
    courses(where: { slug: { _eq: $slug } }) {
      complexity
      created_at
      creator
      description
      id
      name
      updated_at
    }
  }
`;

export const FETCH_COURSE_BY_COMPOSITE = gql`
  query fetchCourseByUserAndCourseId($userId: uuid, $courseId: uuid) {
    user_courses(
      where: { user_id: { _eq: $userId }, course_id: { _eq: $courseId } }
    ) {
      progress
      completion_date
      course {
        id
        name
        description
        creator
        complexity
        slug
      }
    }
  }
`;

export const FETCH_USER_COURSE_PROGRESS = gql`
  query fetchUserCourseProgress($courseId: uuid, $userId: uuid) {
    user_courses(
      where: { course_id: { _eq: $courseId }, user_id: { _eq: $userId } }
    ) {
      progress
      id
      status
      updated_at
    }
  }
`;
