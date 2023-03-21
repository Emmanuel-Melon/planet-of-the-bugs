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
