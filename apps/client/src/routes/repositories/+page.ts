import apolloClient from "$lib/graphql/apolloClient";
import { fail, redirect } from "@sveltejs/kit";
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
      email: "magedfaiz98@gmail.com",
    },
  });

  const user = data?.user[0];
  const userTopics = JSON.parse(user?.userTopics) || [];

  let queryString = url.searchParams.get("page") as string;
  let limit = 4;

  if(queryString) {
    limit = parseInt(queryString);
  }

  const [repositories, topics, subscribed] = await Promise.all([
    searchRepositoriesByTopic(userTopics, limit),
    getUserRepositoryTopics(),
    getSubscribedRepositories(user.id),
  ]);

  return {
    repositories: {
      data: repositories?.data?.search,
    },
    user: {
      ...user,
      userTopics: userTopics,
      subscribedRepos: subscribed.data.user_subscribed_repos,
    },
    topics: topics.data.repo_topics,
  };
};
