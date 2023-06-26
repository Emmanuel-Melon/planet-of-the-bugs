import {
  GITHUB_GET_USER_BY_EMAIL,
  GET_USER_BY_EMAIL,
} from "$lib/graphql/queries/user";
import apolloClient from "$lib/graphql/apolloClient";
import { GITHUB_API } from "$lib/github/githubGraphQLClient";
import { destructureQueryResults } from "$lib/graphql/helpers";
import {
  redirectUnAuthenticatedUsers,
  refreshGitHubAccessToken,
  validateGitHubAccessToken,
} from "$lib/auth/helpers";

export const load = async (event) => {
  const { parent, data: pageData } = event;

  const { session } = await parent();

  redirectUnAuthenticatedUsers(session, [307, "/auth"]);

  const isTokenValid = validateGitHubAccessToken(session?.expires);

  if (!isTokenValid) {
    refreshGitHubAccessToken(session);
  }

  GITHUB_API.setSession(session?.token?.accessToken);

  const user = await apolloClient.query({
    query: GET_USER_BY_EMAIL,
    variables: {
      email: session?.user?.email,
    },
  });

  const githubClient = GITHUB_API.getGithubClient();

  const githubUser = await githubClient.query({
    query: GITHUB_GET_USER_BY_EMAIL,
  });

  const {
    data: { user: destructuredUserObject, loading: profileLoading },
  } = user;

  const output = destructureQueryResults(githubUser);

  const { result: destructuredGithubUser, loading: gitHubrofileLoading } =
    output;

  const userInfo = destructuredUserObject[0];

  return {
    github_user: {
      destructuredGithubUser,
      gitHubrofileLoading,
    },
    user: { ...userInfo, profileLoading },
  };
};
