import apolloClient from '$lib/graphql/apolloClient';
import { GITHUB_API } from '$lib/github/githubGraphQLClient';

import {
  GET_USER_BASIC_INFO_BY_USERNAME,
  GET_GITHUB_USER_BASIC_INFO_BY_GITHUB_USERNAME,
  GET_REPOS_CONTRIBUTED_TO_BY_GITHUB_USERNAME,
  GET_PINNED_ITEMS_BY_GITHUB_USERNAME,
} from '$lib/graphql/queries/user';

import {
  GET_SUBSCRIBED_REPOS,
  GET_USER_REPOS_BY_GITHUB_USERNAME,
} from '$lib/graphql/queries/repositories';


export const load = async (event) => {
  const { params, parent } = event;

  const { session } = await parent();

  if (session?.token) {
    GITHUB_API.setSession(session.token.accessToken);
  }

  let user = session?.user;
  let githubProfileData = null;
  const currentUser = user?.username === params?.username;

  if (!currentUser) {
    const { data } = await apolloClient.query({
      query: GET_USER_BASIC_INFO_BY_USERNAME,
      variables: {
        username: params.username,
      },
    });

    user = data.user[0];
  }

  if (user?.hasConnectedGithub) {
    const githubClient = GITHUB_API.getGithubClient();

    const [githubUserData, contributedTo, pinnedItems, ownedRepos, subscribedRepos] =
      await Promise.all([
        githubClient.query({
          query: GET_GITHUB_USER_BASIC_INFO_BY_GITHUB_USERNAME,
          variables: {
            username: user.githubUsername,
          },
        }),
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
        apolloClient.query({
          query: GET_SUBSCRIBED_REPOS,
          variables: {
            user_id: user.id,
          },
        }),
      ]);

    const githubUser = githubUserData.data.user;
    const contributionData = contributedTo.data.user.repositoriesContributedTo;
    const topRepoData = pinnedItems.data.user.pinnedItems;
    const repositories = ownedRepos.data.user?.repositories;
    const subscribedTo = subscribedRepos.data.user_subscribed_repos;

    githubProfileData = {
      githubUser,
      repositories,
      subscribedTo,
      contributedTo: contributionData,
      pinnedItems: topRepoData,
    };
  }

  return {
    currentUser,
    user,
    githubProfileData,
  };
};
