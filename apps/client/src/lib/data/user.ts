import apolloClient from "$lib/graphql/apolloClient";
import { FETCH_USER_COURSE_PROGRESS } from "$lib/graphql/queries/courses";
import {
  GET_SUBSCRIBED_REPOS,
  GET_USER_REPOS_BY_GITHUB_USERNAME,
} from "$lib/graphql/queries/repositories";
import {
  GET_REPOS_CONTRIBUTED_TO,
  GET_USER_BY_EMAIL,
  GET_USER_BY_GITHUB_LOGIN,
  GET_USER_BY_USERNAME,
  GET_USER_PINNED_ITEMS,
} from "$lib/graphql/queries/user";

export const getUserByUsername = async (username: string) => {
  const { data } = await apolloClient.query({
    query: GET_USER_BY_USERNAME,
    variables: {
      username,
    },
  });
  return data.user[0];
};

export const getUserByEmail = async (email: string) => {
  const { data } = await apolloClient.query({
    query: GET_USER_BY_EMAIL,
    variables: {
      email,
    },
  });
  return data.user[0];
};

export const getUserRepoSubscriptions = async (userId: string) => {
  const { data } = await apolloClient.query({
    query: GET_SUBSCRIBED_REPOS,
    variables: {
      user_id: userId,
    },
  });
  return data.user_subscribed_repos;
};

export const getGitHubAccountInfo = async (githubUsername: string) => {
  const { data } = await apolloClient.query({
    query: GET_USER_BY_GITHUB_LOGIN,
    variables: {
      login: githubUsername,
    },
  });
  return data.user;
};

export const getGitHubAccountOwnedRepositories = async (
  githubUsername: string
) => {
  const { data } = await apolloClient.query({
    query: GET_USER_REPOS_BY_GITHUB_USERNAME,
    variables: {
      login: githubUsername,
    },
  });
  return data.user.repositories;
};

export const getGitHubAccountContributedTo = async (githubUsername: string) => {
  const { data } = await apolloClient.query({
    query: GET_REPOS_CONTRIBUTED_TO,
    variables: {
      login: githubUsername,
    },
  });
  return data.user.repositoriesContributedTo;
};

export const getGitHubAccountPinnedRepos = async (githubUsername: string) => {
  const { data } = await apolloClient.query({
    query: GET_USER_PINNED_ITEMS,
    variables: {
      login: githubUsername,
    },
  });
  return data.user.pinnedItems;
};

export const getUserCourseProgress = async (slug: String, userId: String) => {
  const { data } = await apolloClient.query({
    query: FETCH_USER_COURSE_PROGRESS,
    variables: {
      slug,
      userId: userId,
    },
  });
  return data.user_courses[0];
};
