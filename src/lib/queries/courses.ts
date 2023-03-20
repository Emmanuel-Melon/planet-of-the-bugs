import {
    ApolloClient,
    InMemoryCache,
    gql,
    createHttpLink,
    HttpLink,
  // @ts-ignore
  } from "@apollo/client/core/core.cjs";

export const FETCH_COURSES = gql`query fetchCourses {
    courses {
      id
      name
      description
      creator
      complexity
    }
  }`;