import {
    GET_USER_BY_EMAIL,
    GET_REPOS_CONTRIBUTED_TO_BY_GITHUB_USERNAME,
    GET_PINNED_ITEMS_BY_GITHUB_USERNAME,
} from "$lib/graphql/queries/user";

import {
    GET_SUBSCRIBED_REPOS,
    GET_USER_REPOS,
    GET_CONTRIBUTIONS_BY_REPO,
    GET_USER_PULL_REQUEST_CONTRIBUTIONS,
} from "$lib/graphql/queries/repositories";

export const getUserPinnedItems = (gitHubUsername: string): Promise<any[]> => {
    return githubClient.query({
        query: GET_PINNED_ITEMS_BY_GITHUB_USERNAME,
        variables: {
            login: gitHubUsername,
        },
    })
};

export const getRepoContributions = (): Promise<any[]> => {
    return githubClient.query({
        query: GET_REPOS_CONTRIBUTED_TO_BY_GITHUB_USERNAME,
    })
};

export const getRepoSubscriptions = (userId: string): Promise<any[]> => {
    return apolloClient.query({
        query: GET_SUBSCRIBED_REPOS,
        variables: {
            user_id: userId,
        },
    });
};

export const getOwnedRepositories = (gitHubUsername: string): Promise<any[]> => {
    return githubClient.query({
        query: GET_USER_REPOS,
        variables: {
            login: gitHubUsername,
        },
    })
};

export const getUserByEmail = (email: string): Promise<any> => {
    return apolloClient.query({
        query: GET_USER_BY_EMAIL,
        variables: {
            email: email,
        },
    });
};

export const getGitHubAccountInfo = (): Promise<any> => {
    return githubClient.query({
        query: GITHUB_GET_USER_BY_EMAIL,
    });
};