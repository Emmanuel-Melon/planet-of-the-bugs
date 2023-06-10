import {
  GITHUB_USER_BASIC_INFO,
  REPOS_CONTRIBUTED_TO,
  GET_PINNED_ITEMS,
} from "$lib/graphql/queries/user";

import { GET_SUBSCRIBED_REPOS, GET_USER_REPOS } from "$lib/graphql/queries/repositories";
import apolloClient from "$lib/graphql/apolloClient";
import { GITHUB_API } from "$lib/github/githubGraphQLClient";

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
        user_id: "fae379cf-4387-4dac-a5af-bf092734a464",
      },
    })
  ]);

  const { data: contributionData } = contributedTo;
  const { data: topRepoData } = pinnedItems;
  const { data: repositories } = ownedRepos;
  const { data: subscribedTo } = subscribedRepos;
  
  return {
    user: {
      ...data,
    },
    contributedTo: { ...contributionData.viewer.repositoriesContributedTo },
    pinnedItems: topRepoData.user.pinnedItems,
    repositories: repositories?.user?.repositories,
    subscribedTo: subscribedTo?.user_subscribed_repos
  };
}