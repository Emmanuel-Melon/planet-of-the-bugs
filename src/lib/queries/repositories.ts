import {
  gql,
  // @ts-ignore
} from "@apollo/client/core/core.cjs";

export const FOLLOW_REPO = gql`
  mutation AddRepoToFavorites($repositoryId: ID!) {
    followRepository(input: { repositoryId: $repositoryId }) {
      clientMutationId
    }
  }
`;

export const GET_FOLLOWED_REPOS = gql`
  query GetFollowedRepos {
    user(username: $username) {
      followedRepos {
        id
        name
        owner
        createdAt
        updatedAt
      }
    }
  }
`;

export const FETCH_REPOSITORIES_BY_TOPIC = gql`
  query MyQuery {
    search(query: "topic:react", type: REPOSITORY, first: 10) {
      edges {
        node {
          ... on Repository {
            id
            name
            createdAt
            description
            homepageUrl
            sshUrl
            url
            forkCount
            stargazerCount
          }
        }
      }
    }
  }
`;

export const GET_REPO_WITH_LATEST_ISSUES = gql`
  query GetRepoWithLatestIssues($repoName: String!, $issueCount: Int!) {
    repository(name: $repoName) {
      id
      name
      owner {
        login
      }
      issues(
        first: $issueCount
        orderBy: { field: CREATED_AT, direction: DESC }
      ) {
        edges {
          node {
            id
            title
            createdAt
          }
        }
      }
    }
  }
`;
