import {
  FETCH_REPOSITORIES_BY_TOPICS,
  GET_AVAILABLE_TOPICS,
  GET_SUBSCRIBED_REPOS,
  GET_GITHUB_REPO,
  GET_GITHUB_REPO_ISSUES,
  GET_GITHUB_REPO_PRS,

} from "$lib/graphql/queries/repositories";
import apolloClient from "$lib/graphql/apolloClient";
import { stringifyTopics } from "bugs-lib";
import type { ApolloQueryResult } from "@apollo/client/core";

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

export const searchRepositoriesByTopic = async (topics: Array<string>, limit: number) => {

  try {
    const result = await apolloClient.query({
      query: FETCH_REPOSITORIES_BY_TOPICS,
      variables: {
        topics: stringifyTopics(topics),
        limit
      },
    });
  
    // console.log("result", result);
    return result;
  } catch (error) {
    console.log("error:", error);
  }

}

export const getUserRepositoryTopics = (): Promise<ApolloQueryResult<any>> => {
  return apolloClient.query({
    query: GET_AVAILABLE_TOPICS,
  });
}

export const getSubscribedRepositories = (userId: string): Promise<ApolloQueryResult<any>> => {
  return apolloClient.query({
    query: GET_SUBSCRIBED_REPOS,
    variables: {
      user_id: userId,
    },
  })
}
