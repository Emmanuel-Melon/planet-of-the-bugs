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
      }
}
`;

export const USER_BASIC_INFO = gql`
query fetchUserBasicInfo($email: String) {
  user: users(where: {email: {_eq: $email}}) {
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
