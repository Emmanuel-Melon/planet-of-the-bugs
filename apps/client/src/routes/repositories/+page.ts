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

  let queryString = url.searchParams.get("page") as string;
  let limit = 4;

  if(queryString) {
    limit = parseInt(queryString);
  }

  // const repositories = await searchRepositoriesByTopic(userTopics, limit);


  const [repositories, topics] = await Promise.all([
    searchRepositoriesByTopic(userTopics, limit),
    getUserRepositoryTopics(),
  ]);

  return {
    repositories: {
      data: repositories?.data?.search,
    },
    user: {
      ...user,
      userTopics: userTopics
    },
    topics: topics.data.repo_topics,
  };
};
