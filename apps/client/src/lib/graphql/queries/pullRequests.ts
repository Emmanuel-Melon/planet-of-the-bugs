import { gql } from "@apollo/client/core";

export const GET_PULL_REQUESTS = gql`
  query GetPullRequests($username: String!, $repoName: String!) {
    user(login: $username) {
      pullRequests(
        first: 10
        states: OPEN
        orderBy: { field: CREATED_AT, direction: DESC }
        baseRefName: $repoName
      ) {
        nodes {
          title
          createdAt
          state
          url
        }
      }
    }
  }
`;
