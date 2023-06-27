import { FETCH_REPOSITORIES_BY_TOPICS } from "$lib/graphql/queries/repositories.js";
import apolloClient from "$lib/graphql/apolloClient";
import { GITHUB_API } from "$lib/github/githubGraphQLClient";
import { error } from "@sveltejs/kit";
import { GET_USER_BY_EMAIL } from "$lib/graphql/queries/user";
import {
  redirectUnAuthenticatedUsers,
  refreshGitHubAccessToken,
  validateGitHubAccessToken,
} from "$lib/auth/helpers";
import { StringifyTopics } from "bugs-lib";

export const load = async (event) => {
  const {
    params,
    url,
    setHeaders,
    parent,
    fetch,
    depends,
    data: pageData,
  } = event;

  const { session } = await parent();

  redirectUnAuthenticatedUsers(session, [307, "/auth"]);
  GITHUB_API.setSession(session?.token?.accessToken);
  const githubClient = GITHUB_API.getGithubClient();

  try {
    const { data } = await apolloClient.query({
      query: GET_USER_BY_EMAIL,
      variables: {
        email: session?.user?.email,
      },
    });

    const user = data?.user[0];

    const repositories = await githubClient.query({
      query: FETCH_REPOSITORIES_BY_TOPICS,
      variables: {
        topics: StringifyTopics(user?.userTopics),
      },
    });

    return {
      repositories: {
        data: repositories?.data?.search,
      },
      user,
    };
  } catch (err) {}
};
