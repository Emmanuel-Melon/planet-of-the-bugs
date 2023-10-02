import type { PageServerLoad, Actions } from "./$types";
import { fail, redirect } from "@sveltejs/kit";
import {
  getGitHubAccountContributedTo,
  getGitHubAccountInfo,
  getGitHubAccountOwnedRepositories,
  getGitHubAccountPinnedRepos,
  getUserByUsername,
  getUserRepoSubscriptions,
} from "$lib/data/user";

export const load: PageServerLoad = async (event) => {
  const { locals, params, parent } = event;
  const session = await locals.auth.validate();
  if (!session) throw redirect(302, "/login");

  const user = await getUserByUsername(params.username);

  return {
    user,
    githubProfileData: getGitHubAccountInfo(user.githubUsername),
    repositories: getGitHubAccountOwnedRepositories(user.githubUsername),
    contributionData: getGitHubAccountContributedTo(user.githubUsername),
    pinned: getGitHubAccountPinnedRepos(user.githubUsername),
    subscribedTo: getUserRepoSubscriptions(user.id),
  };
};
