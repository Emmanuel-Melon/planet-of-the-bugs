import {
  GET_USER_BY_EMAIL,
} from "$lib/graphql/queries/user";
import { GITHUB_API } from "$lib/github/githubGraphQLClient";
import { destructureQueryResults } from "$lib/graphql/helpers";
import { redirectUnAuthenticatedUsers } from "$lib/auth/helpers";
import { getUserPinnedItems, getGitHubAccountInfo, getOwnedRepositories, getRepoContributions, getRepoSubscriptions, getUserByEmail } from "$lib/data/user";


export const load = async (event) => {
  const {
    parent,
    data: pageData,
  } = event;

  const { session } = await parent();
  redirectUnAuthenticatedUsers(session, [307, "/auth"]);

  GITHUB_API.setSession(session?.token?.accessToken);
  const githubClient = GITHUB_API.getGithubClient();

  const { data } = await githubClient.query({
    query: GET_USER_BY_EMAIL,
  });

  const [githubUser, data] = await Promise.all([
    getGitHubAccountInfo(),
    getUserByEmail(session?.user?.email)
  ]);

  const {
    data: { user: destructuredUserObject, loading: profileLoading },
  } = user;

  const output = destructureQueryResults(githubUser);

  const { result: destructuredGithubUser, loading: gitHubrofileLoading } =
    output;

  const userInfo = destructuredUserObject[0];


  const [contributedTo, pinnedItems, subscribedRepos, ownedRepos] = await Promise.all([
    getRepoContributions(),
    getUserPinnedItems(data?.viewer?.login),
    getRepoSubscriptions(userInfo.id),
    getOwnedRepositories(data?.viewer?.login)
  ]);

  const { data: contributionData } = contributedTo;
  const { data: topRepoData } = pinnedItems;
  const { data: repositories } = ownedRepos;
  const { data: subscribedTo } = subscribedRepos;

  return {
    github_user: {
      destructuredGithubUser,
      gitHubrofileLoading,
    },
    currentUser: { ...userInfo, profileLoading },
    user: {
      ...data,
    },
    contributedTo: { ...contributionData.viewer.repositoriesContributedTo },
    pinnedItems: topRepoData.user.pinnedItems,
    repositories: repositories?.user?.repositories,
    subscribedTo: subscribedTo?.user_subscribed_repos,
  };
};
