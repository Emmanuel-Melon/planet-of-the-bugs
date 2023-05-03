import { FETCH_ISSUES_BY_DIFFICULTY } from "$lib/queries/issues";
import { FETCH_REPOSITORIES_BY_TOPIC } from "$lib/queries/repositories.js";
import apolloClient, { githubClient } from "$lib/apollo";
import { error } from "@sveltejs/kit";
import { USER_BASIC_INFO } from "$lib/queries/user";

export const load = async ({ params }) => {
  /**
 *     const { data } = await githubClient.query({
      query: FETCH_REPOSITORIES_BY_TOPIC
    });

    apolloClient.query({
      query: USER_BASIC_INFO,
      variables: {
        email: "emmanuelgatwech@gmail.com", // make it dybanuc
      },
    }),

       

 */
  const [repositories, user] = await Promise.all([
    await githubClient.query({
      query: FETCH_REPOSITORIES_BY_TOPIC,
    }),
    apolloClient.query({
      query: USER_BASIC_INFO,
      variables: {
        email: "emmanuelgatwech@gmail.com", // make it dybanuc
      },
    }),
  ]);

  return {
    repositories: {
      data: repositories?.data?.search,
      user: user?.data?.user[0] || {},
    },
    user: {
      data: user?.data?.user[0] || {},
    },
  };
};
