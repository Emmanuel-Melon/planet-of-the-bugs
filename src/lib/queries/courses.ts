import {
  gql,
  // @ts-ignore
} from "@apollo/client/core/core.cjs";

export const FETCH_COURSES = gql`
  query fetchCourses {
    courses {
      id
      name
      description
      creator
      complexity
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
