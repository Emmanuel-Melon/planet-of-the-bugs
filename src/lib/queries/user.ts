import {
  gql,
  // @ts-ignore
} from "@apollo/client/core/core.cjs";

export const USER_BASIC_INFO = gql`
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
      }
}
`;
