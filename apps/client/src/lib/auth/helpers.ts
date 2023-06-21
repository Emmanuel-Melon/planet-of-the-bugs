import { redirect } from '@sveltejs/kit';

type RedirectionOpions = Parameters<typeof redirect>

export const redirectUnAuthenticatedUsers = (session, options: RedirectionOpions) => {
    const [ status, location ] = options;
    if (session === null || session === undefined) {
        throw redirect(status, location);
    }
}