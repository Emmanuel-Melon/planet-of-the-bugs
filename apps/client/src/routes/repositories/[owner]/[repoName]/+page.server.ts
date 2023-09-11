import { GET_REPO_WITH_LATEST_ISSUES } from '$lib/graphql/queries/repositories.js';
import apolloClient from '$lib/graphql/apolloClient';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
  const { params, parent } = event;

  const { owner, repoName } = params;

  const { data } = await apolloClient.query({
    query: GET_REPO_WITH_LATEST_ISSUES,
    variables: {
      owner: owner,
      repoName: repoName,
      issueCount: 10,
    },
  });

  return {
    repo: data.repository,
  };
};
