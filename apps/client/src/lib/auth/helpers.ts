import { redirect } from '@sveltejs/kit';

type RedirectionOpions = Parameters<typeof redirect>

export const redirectUnAuthenticatedUsers = (session, options: RedirectionOpions): void => {

    console.log("session");
    console.log(session);
    const [ status, location ] = options;
    if (session === null || session === undefined) {
        throw redirect(status, location);
    }
}

export const refreshGitHubAccessToken = (session): void => {
    
}

export const validateGitHubAccessToken = (expires: string): boolean => {
    return true;
}

