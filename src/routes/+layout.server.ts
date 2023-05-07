import type { LayoutServerLoad } from './$types';
import apolloClient, { githubClient } from "$lib/apollo";
import {
  PUBLIC_HASURA_ADMIN_SECRET,
  PUBLIC_GITHUB_ACCESS_CODE,
  PUBLIC_GITHUB_API_ENDPOINT,
} from "$env/static/public";

type ServerData = {
  session?: any,
  githubClient?: any,
}


export const load: LayoutServerLoad = async (event)=> {
  const session = await event.locals.getSession();

  return {
    session,
  };
};