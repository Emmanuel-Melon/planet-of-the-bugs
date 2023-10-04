import apolloClient from "$lib/graphql/apolloClient";
import { error, fail, redirect } from "@sveltejs/kit";

import { GET_USER_BY_EMAIL } from "$lib/graphql/queries/user";
import { getSubscribedRepositories, getUserRepositoryTopics, searchRepositoriesByTopic } from "$lib/data/repositories.js";

export const load = async (event) => {
  const {
    params,
    url,
    data: pageData,
  } = event;

  const { data } = await apolloClient.query({
    query: GET_USER_BY_EMAIL,
    variables: {
      email: "emmanuelgatwech@gmail.com",
    },
  });

  const user = data?.user[0];
  const userTopics = JSON.parse(user?.userTopics) || [];

  let queryString = url.searchParams.get("cursor") as string;
  let limit = url.searchParams.get("limit") as string;
  let cursor;

  if(queryString) {
    cursor = queryString;
  }

  const [repositories, topics] = await Promise.all([
    searchRepositoriesByTopic(userTopics, {
      cursor,
      limit: parseInt(limit) || 6
    }),
    getUserRepositoryTopics(),
  ]);

  return {
    repositories: {
      data: repositories?.data?.search
    },
    user: {
      ...user,
      userTopics: userTopics
    },
    topics: topics.data.repo_topics,
  };
};
