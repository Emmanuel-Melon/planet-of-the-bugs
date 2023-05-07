// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

import {
  GITHUB_USER_BASIC_INFO,
  REPOS_CONTRIBUTED_TO,
  GET_PINNED_ITEMS
} from '$lib/queries/user';
import { GITHUB_API } from "$lib/apollo";

export const load = async (event) => {

  const { params, url, setHeaders, route, parent, fetch, depends, data: pageData } = event;

  const { session } = await parent();
  if (session?.token !== null || session?.token !== undefined) {
    console.log("why");
    GITHUB_API.setSession(session?.token?.accessToken);
  }
  const githubClient = GITHUB_API.getGithubClient();
  return {


  };
};
