import { redirectUnAuthenticatedUsers } from '$lib/auth/helpers';

export const load = async (event) => {
  const { parent, fetch, depends, data: pageData } = event;

  const { session } = await parent();

  redirectUnAuthenticatedUsers(session, [307, '/login']);

  return {
    session,
  };
};
