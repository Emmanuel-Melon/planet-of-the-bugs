import apolloClient from "$lib/graphql/apolloClient";
import {
  GET_GITHUB_REPO,
  GET_GITHUB_REPO_ISSUES,
  GET_GITHUB_REPO_PRS,
} from "$lib/graphql/queries/repositories";

export const getGithubRepo = async (repoName: string, owner: string) => {
  const { data } = await apolloClient.query({
    query: GET_GITHUB_REPO,
    variables: {
      repoName,
      owner,
    },
  });
  return data.repository;
};

export const getGithubRepoIssues = async (
  repoName: string,
  owner: string,
  issueCount: number
) => {
  const { data } = await apolloClient.query({
    query: GET_GITHUB_REPO_ISSUES,
    variables: {
      repoName,
      owner,
      issueCount,
    },
  });
  return data.repository.issues.edges;
};

export const getGithubRepoPullRequests = async (
  repoName: string,
  owner: string,
  prCount: number
) => {
  const { data } = await apolloClient.query({
    query: GET_GITHUB_REPO_PRS,
    variables: {
      repoName,
      owner,
      prCount,
    },
  });
  return data.repository.pullRequests.edges;
};
