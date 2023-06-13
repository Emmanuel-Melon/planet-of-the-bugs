import {
  GITHUB_USER_BASIC_INFO,
  REPOS_CONTRIBUTED_TO,
  GET_PINNED_ITEMS,
  USER_BASIC_INFO
} from "$lib/graphql/queries/user";

import {
  GET_SUBSCRIBED_REPOS, GET_USER_REPOS, GET_CONTRIBUTIONS_BY_REPO,
  GET_USER_PULL_REQUEST_CONTRIBUTIONS,
} from "$lib/graphql/queries/repositories";
import apolloClient from "$lib/graphql/apolloClient";
import { GITHUB_API } from "$lib/github/githubGraphQLClient";
import { destructureQueryResults } from "$lib/graphql/helpers";

export const load = async (event) => {
  const { params, url, setHeaders, route, parent, fetch, depends, data: pageData } = event;

  const { session } = await parent();

  if (session?.token !== null || session?.token !== undefined) {
    GITHUB_API.setSession(session?.token?.accessToken);
  }
  const githubClient = GITHUB_API.getGithubClient();

  const { data } = await githubClient.query({
    query: GITHUB_USER_BASIC_INFO,
  });

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

  const [contributedTo, pinnedItems, ownedRepos, subscribedRepos] = await Promise.all([
    githubClient.query({
      query: REPOS_CONTRIBUTED_TO,
    }),
    githubClient.query({
      query: GET_PINNED_ITEMS,
      variables: {
        login: data?.viewer?.login,
      },
    }),
    githubClient.query({
      query: GET_USER_REPOS,
      variables: {
        login: data?.viewer?.login
      }
    }),
    apolloClient.query({
      query: GET_SUBSCRIBED_REPOS,
      variables: {
        user_id: userInfo.id,
      },
    })
  ]);

  const { data: contributionData } = contributedTo;
  const { data: topRepoData } = pinnedItems;
  const { data: repositories } = ownedRepos;
  const { data: subscribedTo } = subscribedRepos;

  return {
    github_user: {
      destructuredGithubUser,
      gitHubrofileLoading
    },
    currentUser: { ...userInfo, profileLoading },
    user: {
      ...data,
    },
    contributedTo: { ...contributionData.viewer.repositoriesContributedTo },
    pinnedItems: topRepoData.user.pinnedItems,
    repositories: repositories?.user?.repositories,
    subscribedTo: subscribedTo?.user_subscribed_repos
  };
}