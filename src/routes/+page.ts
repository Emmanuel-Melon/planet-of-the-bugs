// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

import {
  GITHUB_USER_BASIC_INFO,
  REPOS_CONTRIBUTED_TO,
  GET_PINNED_ITEMS
} from '$lib/queries/user';
import { githubClient } from '$lib/apollo';

export const load = async ({ params }) => {

  const { data } = await githubClient.query({
    query: GITHUB_USER_BASIC_INFO
  });

  const [contributedTo] = await Promise.all([

    await githubClient.query({
      query: REPOS_CONTRIBUTED_TO
    }),

  ]);



  const { data: contributionData } = contributedTo;


  return {
    user: {
      ...data
    },
    contributedTo: {
      ...contributionData.viewer.repositoriesContributedTo
    },

  };
};
