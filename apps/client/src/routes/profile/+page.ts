import {
  GITHUB_USER_BASIC_INFO,
  REPOS_CONTRIBUTED_TO,
  GET_PINNED_ITEMS,
} from "$lib/graphql/queries/user";

import { GET_SUBSCRIBED_REPOS, GET_USER_REPOS } from "$lib/graphql/queries/repositories";
import { redirect } from '@sveltejs/kit';
import { GITHUB_API } from "$lib/github/githubGraphQLClient";

export const load = async (event) => {
  const { parent, fetch, depends, data: pageData } = event;

  const { session } = await parent();

  if (session === null) {
    throw redirect(307, '/auth');
  }

  GITHUB_API.setSession(session?.token?.accessToken);
  const githubClient = GITHUB_API.getGithubClient();

  const { data } = await githubClient.query({
    query: GITHUB_USER_BASIC_INFO,
  });

  const [contributedTo, pinnedItems, ownedRepos] = await Promise.all([
    await githubClient.query({
      query: REPOS_CONTRIBUTED_TO,
    }),
    await githubClient.query({
      query: GET_PINNED_ITEMS,
      variables: {
        login: data?.viewer?.login,
      },
    }),
    await githubClient.query({
      query: GET_USER_REPOS,
      variables: {
        login: data?.viewer?.login
      }
    })
  ]);

  const { data: contributionData } = contributedTo;
  const { data: topRepoData } = pinnedItems;
  const { data: repositories } = ownedRepos;

  return {
    user: {
      ...data,
    },
    contributedTo: { ...contributionData.viewer.repositoriesContributedTo },
    pinnedItems: topRepoData.user.pinnedItems,
    repositories: repositories?.user?.repositories
  };
}