import { gql } from "@apollo/client/core";

export const FETCH_ISSUES_BY_DIFFICULTY = gql`
  query MyQuery {
    search(
      query: "label:good-first-issue label:help-wanted label:bug is:open"
      type: ISSUE
      first: 25
    ) {
      edges {
        node {
          ... on Issue {
            id
            title
            url
          }
        }
      }
    }
  }
`;
