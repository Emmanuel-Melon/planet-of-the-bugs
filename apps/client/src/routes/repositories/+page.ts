import {
  FETCH_REPOSITORIES_BY_TOPICS,
  GET_AVAILABLE_TOPICS,
  GET_SUBSCRIBED_REPOS,
} from "$lib/graphql/queries/repositories.js";
import apolloClient from "$lib/graphql/apolloClient";
import { fail, redirect } from "@sveltejs/kit";
import { GET_USER_BY_EMAIL } from "$lib/graphql/queries/user";
import { stringifyTopics } from "bugs-lib";

export const load = async (event) => {
  const {
    params,
    url,
    setHeaders,
    parent,
    fetch,
    depends,
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

  const [repositories, topics, subscribed] = await Promise.all([
    apolloClient.query({
      query: FETCH_REPOSITORIES_BY_TOPICS,
      variables: {
        topics: stringifyTopics(userTopics),
      },
    }),
    apolloClient.query({
      query: GET_AVAILABLE_TOPICS,
    }),
    apolloClient.query({
      query: GET_SUBSCRIBED_REPOS,
      variables: {
        user_id: user.id,
      },
    }),
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
