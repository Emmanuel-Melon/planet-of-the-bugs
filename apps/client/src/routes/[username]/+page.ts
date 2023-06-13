import { GITHUB_API } from '$lib/github/githubGraphQLClient';
import { loggedInUserStore } from './store.js';
import apolloClient from '$lib/graphql/apolloClient';

import {
  GET_PINNED_ITEMS_BY_GITHUB_USERNAME,
  GET_REPOS_CONTRIBUTED_TO_BY_GITHUB_USERNAME,
  GET_GITHUB_USER_BASIC_INFO_BY_GITHUB_USERNAME,
  GET_USER_BASIC_INFO_BY_USERNAME,
} from '$lib/graphql/queries/user';

import { GET_USER_REPOS_BY_GITHUB_USERNAME } from '$lib/graphql/queries/repositories';

export const load = async (event) => {
  const { params, parent, data: pageData } = event;
  const { session } = await parent();

  if (session?.token) {
    GITHUB_API.setSession(session.token.accessToken);
  }

  let user = null;
  const loggedInUserUnsubscribe = loggedInUserStore.subscribe((value) => {
    user = value;
  });

  if (user?.username !== params.username) {
    const { data } = await apolloClient.query({
      query: GET_USER_BASIC_INFO_BY_USERNAME,
      variables: {
        username: params.username,
      },
    });

    user = data.user[0];
  }

  loggedInUserUnsubscribe();

  let githubProfileInfo = null;

  if (user?.hasConnectedGithub) {
    const githubClient = GITHUB_API.getGithubClient();

    const { data: githubUserData } = await githubClient.query({
      query: GET_GITHUB_USER_BASIC_INFO_BY_GITHUB_USERNAME,
      variables: {
        username: user.githubUsername,
      },
    });

    const [contributedTo, pinnedItems, ownedRepos] = await Promise.all([
      githubClient.query({
        query: GET_REPOS_CONTRIBUTED_TO_BY_GITHUB_USERNAME,
        variables: {
          username: user.githubUsername,
        },
      }),
      githubClient.query({
        query: GET_PINNED_ITEMS_BY_GITHUB_USERNAME,
        variables: {
          username: user.githubUsername,
        },
      }),
      githubClient.query({
        query: GET_USER_REPOS_BY_GITHUB_USERNAME,
        variables: {
          username: user.githubUsername,
        },
      }),
    ]);

    const contributionData = contributedTo.data.user.repositoriesContributedTo;
    const topRepoData = pinnedItems.data.user.pinnedItems;
    const repositories = ownedRepos.data.user?.repositories;

    githubProfileInfo = {
      contributedTo: contributionData,
      pinnedItems: topRepoData,
      repositories: repositories,
    };
  }

  return {
    githubProfileInfo,
  };
};
