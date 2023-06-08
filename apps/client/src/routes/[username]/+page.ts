import {
  GET_PINNED_ITEMS_BY_GITHUB_USERNAME,
  GET_REPOS_CONTRIBUTED_TO_BY_GITHUB_USERNAME,
  GET_GITHUB_USER_BASIC_INFO_BY_GITHUB_USERNAME,
} from '$lib/graphql/queries/user';

import {
  GET_SUBSCRIBED_REPOS,
  GET_USER_REPOS,
  GET_USER_REPOS_BY_GITHUB_USERNAME,
} from '$lib/graphql/queries/repositories';
import apolloClient from '$lib/graphql/apolloClient';
import { GITHUB_API } from '$lib/github/githubGraphQLClient';

export const load = async (event) => {
  const {
    params,
    url,
    setHeaders,
    route,
    parent,
    fetch,
    depends,
    data: pageData,
  } = event;

  const { session } = await parent();

  if (session?.token !== null || session?.token !== undefined) {
    GITHUB_API.setSession(session?.token?.accessToken);
  }
  const githubClient = GITHUB_API.getGithubClient();

  const { data } = await githubClient.query({
    query: GET_GITHUB_USER_BASIC_INFO_BY_GITHUB_USERNAME,
    variables: {
      username: params.username,
    },
  });

  const [contributedTo, pinnedItems, ownedRepos] = await Promise.all([
    await githubClient.query({
      query: GET_REPOS_CONTRIBUTED_TO_BY_GITHUB_USERNAME,
      variables: {
        username: params.username,
      },
    }),
    await githubClient.query({
      query: GET_PINNED_ITEMS_BY_GITHUB_USERNAME,
      variables: {
        username: params.username,
      },
    }),
    await githubClient.query({
      query: GET_USER_REPOS_BY_GITHUB_USERNAME,
      variables: {
        username: params.username,
      },
    }),
  ]);

  const { data: contributionData } = contributedTo;
  const { data: topRepoData } = pinnedItems;
  const { data: repositories } = ownedRepos;

  return {
    user: {
      ...data.user,
      isCurrentUser: session?.user.githubUsername === data.user?.login,
      contributedTo: { ...contributionData.user.repositoriesContributedTo },
      pinnedItems: topRepoData.user.pinnedItems,
      repositories: repositories?.user?.repositories,
    },
  };
};
