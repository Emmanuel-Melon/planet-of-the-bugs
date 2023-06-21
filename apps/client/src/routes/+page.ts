import { redirectUnAuthenticatedUsers } from "$lib/auth/helpers.js";

export const load = async (event) => {

  const { parent, fetch, depends, data: pageData } = event;

  const { session } = await parent();

  redirectUnAuthenticatedUsers(session, [307, '/auth']);

  return {
    session
  };
};
