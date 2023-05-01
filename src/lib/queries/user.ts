import {
  gql,
  // @ts-ignore
} from "@apollo/client/core/core.cjs";

export const GITHUB_USER_BASIC_INFO = gql`
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

export const TOP_REPOS = gql`
  {
    viewer {
      topRepositories(
        orderBy: { field: CREATED_AT, direction: ASC }
        first: 6
      ) {
        nodes {
          createdAt
          description
          forkCount
          homepageUrl
          name
          forkingAllowed
          id
          stargazerCount
          url
          repositoryTopics(first: 10) {
            nodes {
              url
              topic {
                name
              }
            }
          }
          pullRequests {
            totalCount
          }
          issues {
            totalCount
          }
        }
      }
    }
  }
`;

export const REPOS_CONTRIBUTED_TO = gql`
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

export const USER_BASIC_INFO = gql`
  query fetchUserBasicInfo($email: String) {
    user: users(where: { email: { _eq: $email } }) {
      email
      created_at
      id
      name
      role
      updated_at
      username
    }
  }
`;
