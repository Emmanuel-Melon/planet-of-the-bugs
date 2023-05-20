
import { PUBLIC_GITHUB_API_ENDPOINT } from "$env/static/public";
import { HttpLink, InMemoryCache, ApolloClient } from '@apollo/client/core';

type HttpLinkOptions = {
    Authorization: string,
    uri?: string
}

type GitHubHttplink = HttpLinkOptions & {
    Authorization: string | null,
}

export class GithubApi {
    options: { Authorization: null; uri: any; };
    session: null;
    client: null;
    constructor(options: { Authorization: null; uri: any; }) {
        this.options = options;
        this.session = null;
        this.client = null;
    }

    setSession(session: any) {
        this.session = session;
        this.client = new ApolloClient({
            cache: new InMemoryCache(),
            credentials: "include",
            link: this.createHttpLink(this.options),
        });
    }

    getGithubClient() {
        return this.client;
    }

    createHttpLink({ Authorization, uri }: HttpLinkOptions) {
        return new HttpLink({
            uri,
            credentials: "same-origin",
            headers: {
                Authorization: `Bearer ${this.session}`
            },
        });
    }
}

export const GITHUB_API = new GithubApi({
    Authorization: null,
    uri: PUBLIC_GITHUB_API_ENDPOINT,
});