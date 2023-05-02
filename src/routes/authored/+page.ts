import { GITHUB_USER_BASIC_INFO, USER_BASIC_INFO } from "$lib/queries/user";
import apolloClient, { githubClient } from "$lib/apollo";
import * as kit from "@sveltejs/kit";

import { destructureQueryResults } from "./helpers";




console.log("got kit");;
console.log(Object.keys(kit));
console.log(kit.json)





export const load = async ({ params }) => {
  const [githubUser, user] = await Promise.all([
    githubClient.query({
      query: GITHUB_USER_BASIC_INFO,
    }),
    apolloClient.query({
      query: USER_BASIC_INFO,
      variables: {
        email: "emmanuelgatwech@gmail.com", // make it dybanuc
      },
    }),
  ]);

  const {
    data: { user: destructuredUserObject, loading: profileLoading },
  } = user;

  const output = destructureQueryResults(githubUser);

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
