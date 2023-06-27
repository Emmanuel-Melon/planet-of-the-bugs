import {
  gql,
  // @ts-ignore
  // @ts-nocheck
} from "@apollo/client/core/core.cjs";

export const GET_SUBSCRIBED_REPOS = gql`
  query SubscribedRepos($user_id: uuid) {
    user_subscribed_repos(where: { user_id: { _eq: $user_id } }) {
      id
      repo_name
      repo_owner
      repo_url
    }
  }
`;

export const GET_AVAILABLE_TOPICS = gql`
  query getAvailableTags($id: uuid_comparison_exp = {}) @cached {
    tags {
      isActive
      name
    }
  }
`;

export const GET_USER_REPOS_BY_GITHUB_USERNAME = gql`
  query GetUserRepositories($username: String!) {
    user(login: $username) {
      repositories(
        last: 20
        privacy: PUBLIC
        isFork: false
        affiliations: OWNER
        orderBy: { field: CREATED_AT, direction: DESC }
      ) {
        totalCount
        nodes {
          createdAt
          description
          forkCount
          homepageUrl
          id
          name
          nameWithOwner
          url
          updatedAt
          visibility
          stargazerCount
          owner {
            login
            url
          }
        }
      }
    }
  }
`;

export const GET_USER_PULL_REQUEST_CONTRIBUTIONS = gql`
  query getUserPullRequests($author: String!) {
    user(login: $author) {
      pullRequests(first: 10, states: [OPEN, CLOSED, MERGED]) {
        totalCount
        nodes {
          state
          title
          url
          createdAt
          closedAt
          id
          number
          mergeCommit {
            oid
          }
        }
      }
    }
  }
`;

export const GET_CONTRIBUTIONS_BY_REPO = gql`
  query getContributionsByRepo(
    $owner: String!
    $name: String!
    $author: String!
  ) {
    repository(owner: $owner, name: $name) {
      pullRequests(states: [OPEN, CLOSED, MERGED], last: 10) {
        totalCount
        nodes {
          state
          title
          url
          createdAt
          closedAt
          id
          number
          viewerDidAuthor
        }
      }
      issues(
        states: [OPEN, CLOSED]
        last: 10
        filterBy: { assignee: $author, createdBy: $author }
      ) {
        totalCount
        nodes {
          state
          title
          url
          createdAt
          closedAt
        }
      }
      openedIssues: issues(
        states: [OPEN]
        filterBy: { assignee: $author, createdBy: $author }
      ) {
        totalCount
      }
      closedIssues: issues(
        states: [CLOSED]
        filterBy: { assignee: $author, createdBy: $author }
      ) {
        totalCount
      }
    }
  }
`;

export const FETCH_REPOSITORIES_BY_TOPICS = gql`
  query fetchRepositoriesByTopics($topics: String = "") {
    search(query: $topics, type: REPOSITORY, first: 10) {
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
            owner {
              login
              avatarUrl(size: 84)
              id
              url
            }
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
