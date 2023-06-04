import { GITHUB_USER_BASIC_INFO, USER_BASIC_INFO } from "$lib/graphql/queries/user";
import apolloClient from "$lib/graphql/apolloClient";
import { GITHUB_API } from "$lib/github/githubGraphQLClient";

import { destructureQueryResults } from "./helpers";


export const load = async (event) => {

  const { parent, data: pageData } = event;

  const { session } = await parent();

  if(session?.token !== null || session?.token !== undefined) {
    GITHUB_API.setSession(session?.token?.accessToken);
  }
  const githubClient = GITHUB_API.getGithubClient();
  const [githubUser, user] = await Promise.all([
    githubClient.query({
      query: GITHUB_USER_BASIC_INFO,
    }),
    apolloClient.query({
      query: USER_BASIC_INFO,
      variables: {
        email: session?.user?.email,
      },
    }),
  ]);

  const {
    data: { user: destructuredUserObject, loading: profileLoading },
  } = user;

  const output = destructureQueryResults(githubUser);

  const { result: destructuredGithubUser, loading: gitHubrofileLoading } = output;

  const userInfo = destructuredUserObject[0];

  return {
    github_user: {
      destructuredGithubUser,
      gitHubrofileLoading
    },
    user: { ...userInfo, profileLoading },
  };
};
