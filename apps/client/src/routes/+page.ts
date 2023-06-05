import { redirect } from '@sveltejs/kit';
import { GITHUB_API } from "$lib/github/githubGraphQLClient";

export const load = async (event) => {

  const { parent, fetch, depends, data: pageData } = event;

  const { session } = await parent();

  if (session === null) {
    throw redirect(307, '/auth');
  }
  return {
    session
  };
};
