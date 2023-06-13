import {
  gql,
  // @ts-ignore
  // @ts-nocheck
} from '@apollo/client/core/core.cjs';

export const GET_USER_BY_GITHUB_LOGIN = gql`
  query getUserByGithubLogin($username: String!) {
    user(login: $username) {
      login
      bio
      company
      email
      id
      isBountyHunter
      isCampusExpert
      isDeveloperProgramMember
      isEmployee
      isGitHubStar
      isHireable
      name
      websiteUrl
      url
      twitterUsername
      pronouns
      avatarUrl(size: 16)
      createdAt
      followers {
        totalCount
      }
      location
      pullRequests {
        totalCount
      }
      repositories {
        totalCount
      }
      starredRepositories {
        totalCount
      }
    }
  }
`;

export const GET_GITHUB_USER_BASIC_INFO = gql`
  {
    viewer {
      login
      bio
      company
      email
      id
      isBountyHunter
      isCampusExpert
      isDeveloperProgramMember
      isEmployee
      isGitHubStar
      isHireable
      name
      websiteUrl
      url
      twitterUsername
      pronouns
      avatarUrl(size: 16)
      createdAt
      followers {
        totalCount
      }
      location
      pullRequests {
        totalCount
      }
      repositories {
        totalCount
      }
      starredRepositories {
        totalCount
      }
    }
  }
`;

export const GET_GITHUB_USER_BASIC_INFO_BY_GITHUB_USERNAME = gql`
  query getGithubUserBasicInfoByGithubUsername($username: String!) {
    user(login: $username) {
      login
      bio
      company
      email
      id
      isBountyHunter
      isCampusExpert
      isDeveloperProgramMember
      isEmployee
      isGitHubStar
      isHireable
      name
      websiteUrl
      url
      twitterUsername
      pronouns
      avatarUrl(size: 16)
      createdAt
      followers {
        totalCount
      }
      location
      pullRequests {
        totalCount
      }
      repositories {
        totalCount
      }
      starredRepositories {
        totalCount
      }
    }
  }
`;

export const GET_PINNED_ITEMS = gql`
  query getPinnedItems($login: String!) {
    user(login: $login) {
      pinnedItems(first: 2) {
        totalCount
        nodes {
          ... on Repository {
            name
            description
            stargazerCount
            forks {
              totalCount
            }
            url
            owner {
              login
            }
          }
          ... on Gist {
            name
            description
            stargazerCount
            forks {
              totalCount
            }
            url
            owner {
              login
            }
          }
        }
      }
    }
  }
`;

export const GET_PINNED_ITEMS_BY_GITHUB_USERNAME = gql`
  query GetPinnedItemsByGithubUsername($username: String!) {
    user(login: $username) {
      pinnedItems(first: 2) {
        totalCount
        nodes {
          ... on Repository {
            name
            description
            stargazerCount
            forks {
              totalCount
            }
            url
            owner {
              login
            }
          }
          ... on Gist {
            name
            description
            stargazerCount
            forks {
              totalCount
            }
            url
            owner {
              login
            }
          }
        }
      }
    }
  }
`;

export const GET_REPOS_CONTRIBUTED_TO = gql`
  {
    viewer {
      repositoriesContributedTo(last: 20) {
        totalCount
        nodes {
          description
          name
          url
          stargazerCount
          owner {
            url
            avatarUrl(size: 10)
          }
          nameWithOwner
          mirrorUrl
          homepageUrl
          languages(last: 10) {
            nodes {
              color
              id
              name
            }
            totalCount
          }
        }
      }
    }
  }
`;

export const GET_REPOS_CONTRIBUTED_TO_BY_GITHUB_USERNAME = gql`
  query getReposContributedToByGithubUsername($username: String!) {
    user(login: $username) {
      repositoriesContributedTo(last: 20) {
        totalCount
        nodes {
          description
          name
          url
          stargazerCount
          owner {
            url
            avatarUrl(size: 10)
          }
          nameWithOwner
          mirrorUrl
          homepageUrl
          languages(last: 10) {
            nodes {
              color
              id
              name
            }
            totalCount
          }
        }
      }
    }
  }
`;

export const GET_USER_BASIC_INFO_BY_EMAIL = gql`
  query getUserBasicInfoByEmail($email: String) {
    user: users(where: { email: { _eq: $email } }) {
      email
      created_at
      id
      name
      role
      updated_at
      username
      hasConnectedGithub
      githubUsername
    }
  }
`;

export const GET_USER_BASIC_INFO_BY_USERNAME = gql`
query getUserBasicInfoByUsername($username: String) {
  user: users(where: {username: {_eq: $username}}) {
    email
    created_at
    id
    name
    role
    updated_at
    username
    hasConnectedGithub
    githubUsername
  }
}
`;
