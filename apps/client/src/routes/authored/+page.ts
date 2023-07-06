import {
  GET_GITHUB_USER_BASIC_INFO_BY_GITHUB_USERNAME,
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
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export const load = async (event) => {
  const { parent, data: pageData } = event;

  const { session } = await parent();

  redirectUnAuthenticatedUsers(session, [307, "/auth"]);
  let githubProfileData = null;

  // const isTokenValid = validateGitHubAccessToken(session?.expires);

  // if (!isTokenValid) {
  //   refreshGitHubAccessToken(session);
  // }

  GITHUB_API.setSession(session?.token?.accessToken);

  const user = await apolloClient.query({
    query: GET_USER_BY_EMAIL,
    variables: {
      email: session?.user?.email,
    },
  });

  const {
    data: { user: destructuredUserObject, loading: profileLoading },
  } = user;

  const userInfo = destructuredUserObject[0];

  return {
    user: { ...userInfo, profileLoading },
  };
};
