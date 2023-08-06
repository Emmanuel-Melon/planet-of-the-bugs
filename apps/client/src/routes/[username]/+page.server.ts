import type { PageServerLoad, Actions } from "./$types";
import { fail, redirect } from "@sveltejs/kit";
import { destructureQueryResults } from "$lib/graphql/helpers";
import apolloClient from "$lib/graphql/apolloClient";
import {
  GET_USER_BY_EMAIL,
  GET_REPOS_CONTRIBUTED_TO,
  GET_USER_PINNED_ITEMS,
  GET_USER_BY_GITHUB_LOGIN,
  GET_USER_BY_USERNAME,
} from "$lib/graphql/queries/user";

import {
  GET_SUBSCRIBED_REPOS,
  GET_USER_REPOS_BY_GITHUB_USERNAME,
  GET_CONTRIBUTIONS_BY_REPO,
  GET_USER_PULL_REQUEST_CONTRIBUTIONS,
} from "$lib/graphql/queries/repositories";

export const load: PageServerLoad = async (event) => {
  const { params, parent } = event;
  const { session } = await parent();
  let sessionUser = session.user;
  if (!session?.token) {
    return fail(400, {
      error: "Unauthorized",
    });
  }

  if (!sessionUser?.hasConnectedGithub) {
    return;
  }

  let githubProfileData = null;
  const currentUser = sessionUser?.username === params?.username;

  if (!currentUser) {
    const { data } = await apolloClient.query({
      query: GET_USER_BY_USERNAME,
      variables: {
        username: params?.username,
      },
    });

    sessionUser = data.user[0];
  }

  const getUserPinnedItems = (gitHubUsername): Promise<any[]> => {
    return apolloClient.query({
      query: GET_USER_PINNED_ITEMS,
      variables: {
        username: "Emmanuel-Melon",
      },
    });
  };

  const getRepoContributions = (): Promise<any[]> => {
    return apolloClient.query({
      query: GET_REPOS_CONTRIBUTED_TO,
      variables: {
        username: "Emmanuel-Melon",
      },
    });
  };

  const getRepoSubscriptions = (userId): Promise<any[]> => {
    return apolloClient.query({
      query: GET_SUBSCRIBED_REPOS,
      variables: {
        user_id: userId,
      },
    });
  };

  const getOwnedRepositories = (gitHubUsername): Promise<any[]> => {
    return apolloClient.query({
      query: GET_USER_REPOS_BY_GITHUB_USERNAME,
      variables: {
        username: "Emmanuel-Melon",
      },
    });
  };

  const getUserByEmail = (email): Promise<any> => {
    return apolloClient.query({
      query: GET_USER_BY_EMAIL,
      variables: {
        email: email,
      },
    });
  };

  const getGitHubAccountInfo = (gitHubLogin: String): Promise<any> => {
    return apolloClient.query({
      query: GET_USER_BY_GITHUB_LOGIN,
      variaables: {
        login: gitHubLogin,
      },
    });
  };

  const user = await getUserByEmail(session?.user?.email);
  const {
    data: { user: destructuredUserObject, loading: profileLoading },
  } = user;
  const userInfo = destructuredUserObject[0];

  // const gitHubUser = await getGitHubAccountInfo(userInfo?.githubUsername);
  // console.log(gitHubUser);

  // const output = destructureQueryResults(githubUser);

  // const { result: destructuredGithubUser, loading: gitHubrofileLoading } =
  //     output;

  //console.log(gitHubUser);

  // const [contributedTo, pinnedItems, subscribedRepos, ownedRepos] = await Promise.all([
  //     getRepoContributions(),
  //     getUserPinnedItems(data?.viewer?.login),
  //     getRepoSubscriptions(userInfo.id),
  //     getOwnedRepositories(data?.viewer?.login)
  // ]);

  // const { data: contributionData } = contributedTo;
  // const { data: topRepoData } = pinnedItems;
  // const { data: repositories } = ownedRepos;
  // const { data: subscribedTo } = subscribedRepos;

  return {};
};
