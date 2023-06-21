import type { LayoutServerLoad } from './$types';
import { redirectUnAuthenticatedUsers, refreshGitHubAccessToken, validateGitHubAccessToken } from "$lib/auth/helpers";

export const load = (async (event) => {

    const { parent, fetch, depends, data: pageData } = event;
    const { session } = await parent();
    redirectUnAuthenticatedUsers(session, [307, '/auth']);
}) satisfies LayoutServerLoad;
