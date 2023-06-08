import { FETCH_ISSUES_BY_DIFFICULTY } from "$lib/graphql/queries/issues";
import { FETCH_REPOSITORIES_BY_TOPIC } from "$lib/graphql/queries/repositories.js";
import apolloClient from "$lib/graphql/apolloClient";
import { GITHUB_API } from "$lib/github/githubGraphQLClient";
import { USER_BASIC_INFO } from "$lib/graphql/queries/user";
import { redirect } from '@sveltejs/kit';

export const load = (async (event) => {

  const { params, url, setHeaders, parent, fetch, depends, data: pageData } = event;

  const { session } = await parent();

  if (session === null) {
    throw redirect(307, '/auth');
  }
  GITHUB_API.setSession(session?.token?.accessToken);
  const githubClient = GITHUB_API.getGithubClient();

  const [repositories, user] = await Promise.all([
    await githubClient.query({
      query: FETCH_REPOSITORIES_BY_TOPIC,
    }),
    apolloClient.query({
      query: USER_BASIC_INFO,
      variables: {
        email: session?.user?.email, // make it dybanuc
      },
    }),
  ]);

  return {
    repositories: {
      data: repositories?.data?.search,
      user: user?.data?.user[0] || {},
    },
    user: {
      data: user?.data?.user[0] || {},
    },
  };
});
