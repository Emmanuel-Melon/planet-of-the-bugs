import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { GITHUB_API } from "$lib/github/githubGraphQLClient";

export const load = async (event) => {

  const { parent, fetch, depends, data: pageData } = event;

  const { session } = await parent();

  if (session === null) {
    throw redirect(307, '/auth');
  }
  GITHUB_API.setSession(session?.token?.accessToken);
  const githubClient = GITHUB_API.getGithubClient();
  return {
    session
  };
};
