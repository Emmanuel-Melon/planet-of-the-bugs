import type { PageServerLoad } from "./$types";
import {
  getGithubRepo,
  getGithubRepoIssues,
  getGithubRepoPullRequests,
} from "$lib/data/repositories";

export const load: PageServerLoad = async (event) => {
  const { params, parent } = event;

  const { owner, repoName } = params;

  return {
    repo: getGithubRepo(repoName, owner),
    issues: getGithubRepoIssues(repoName, owner, 10),
    pullRequests: getGithubRepoPullRequests(repoName, owner, 10),
  };
};
