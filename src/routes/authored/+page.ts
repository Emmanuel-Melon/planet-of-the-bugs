import { GITHUB_USER_BASIC_INFO, USER_BASIC_INFO } from "$lib/queries/user";
import apolloClient, { githubClient } from "$lib/apollo";
import { error } from "@sveltejs/kit";
import { destructureQueryResults } from "./helpers";

export const load = async ({ params }) => {
  const [githubUser, user] = await Promise.all([
    githubClient.query({
      query: GITHUB_USER_BASIC_INFO,
    }),
    apolloClient.query({
      query: USER_BASIC_INFO,
      variables: {
        email: "emmanuelgatwech@gmail.com",
      },
    }),
  ]);

  const {
    data: { user: destructuredUserObject, loading: profileLoading },
  } = user;

  const output = destructureQueryResults(githubUser);
  console.log(output);

  const { result: destructuredGithubUser, loading: gitHubrofileLoading } = output;

  const userInfo = destructuredUserObject[0];

  return {
    github_user: {
      destructuredGithubUser,
      gitHubrofileLoading
    },
    user: { ...userInfo, profileLoading },
  };
};
