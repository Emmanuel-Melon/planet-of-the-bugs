import {
  gql,
  // @ts-ignore
  // @ts-nocheck
} from '@apollo/client/core/core.cjs';

export const FETCH_COURSES = gql`
  query fetchCourses {
    courses {
      id
      title
      description
      complexity
      slug
      cover
    }
  }
`;

export const FETCH_COURSE_BY_SLUG = gql`
  query fetchCourseBySlug($slug: String) {
    courses(where: { slug: { _eq: $slug } }) {
      complexity
      created_at
      description
      id
      title
      updated_at
      bucketId
      cover
      creator
      slug
      course_chapters(order_by: { index: asc }) {
        id
        index
        description
        title
        lessons(order_by: { index: asc }) {
          XP
          description
          id
          index
          title
          type
        }
      }
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
        title
        description
        creator
        complexity
        slug
      }
    }
  }
`;

export const FETCH_AUTHORED_COURSES = gql`
  query fetchCourseByAuthor($creator: uuid) {
    courses(where: { creator: { _eq: $creator } }) {
      id
      title
      description
      creator
      complexity
      slug
      cover
    }
  }
`;

export const FETCH_USER_COURSE_PROGRESS = gql`
  query fetchUserCourseProgress($userId: uuid, $slug: String = "") {
    user_courses(
      where: { user_id: { _eq: $userId }, course_slug: { _eq: $slug } }
    ) {
      progress
      id
      status
      updated_at
    }
  }
`;
