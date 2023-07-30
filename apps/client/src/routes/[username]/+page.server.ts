import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import { error } from "@sveltejs/kit";
import { GITHUB_API } from "$lib/github/githubGraphQLClient";
import { destructureQueryResults } from "$lib/graphql/helpers";
import apolloClient from "$lib/graphql/apolloClient";
import {
    GET_USER_BY_EMAIL,
    GET_REPOS_CONTRIBUTED_TO,
    GET_USER_PINNED_ITEMS,
    GET_USER_BY_GITHUB_LOGIN,
    GET_USER_BY_USERNAME
} from "$lib/graphql/queries/user";

import {
    GET_SUBSCRIBED_REPOS,
    GET_USER_REPOS_BY_GITHUB_USERNAME,
    GET_CONTRIBUTIONS_BY_REPO,
    GET_USER_PULL_REQUEST_CONTRIBUTIONS,
} from "$lib/graphql/queries/repositories";



export const load: PageServerLoad = async (event) => {
    const { params, parent } = event;


    const { session } = await parent();
    let user = session?.user;
    if (!session?.token) {
        return;
    }

    if (!user?.hasConnectedGithub) {
        return;
    }


    let githubProfileData = null;
    const currentUser = user?.username === params?.username;
    if (!currentUser) {
        const { data } = await apolloClient.query({
            query: GET_USER_BY_USERNAME,
            variables: {
                username: "junnubiman",
            },
        });

        user = data.user[0];
    }


    GITHUB_API.setSession(session.token.accessToken);
    const githubClient = GITHUB_API.getGithubClient();

    const getUserPinnedItems = (gitHubUsername: string): Promise<any[]> => {
        return githubClient.query({
            query: GET_USER_PINNED_ITEMS,
            variables: {
                login: gitHubUsername,
            },
        })
    };

    const getRepoContributions = (): Promise<any[]> => {
        return githubClient.query({
            query: GET_REPOS_CONTRIBUTED_TO,
        })
    };

    const getRepoSubscriptions = (userId: string): Promise<any[]> => {
        return apolloClient.query({
            query: GET_SUBSCRIBED_REPOS,
            variables: {
                user_id: userId,
            },
        });
    };

    const getOwnedRepositories = (gitHubUsername: string): Promise<any[]> => {
        return githubClient.query({
            query: GET_USER_REPOS_BY_GITHUB_USERNAME,
            variables: {
                login: gitHubUsername,
            },
        })
    };

    const getUserByEmail = (email: string): Promise<any> => {
        return apolloClient.query({
            query: GET_USER_BY_EMAIL,
            variables: {
                email: email,
            },
        });
    };

    const getGitHubAccountInfo = (): Promise<any> => {
        return githubClient.query({
            query: GET_USER_BY_GITHUB_LOGIN,
            variaables: {
                username: params.username
            }
        });
    };

    const [githubUser, data] = await Promise.all([
        getGitHubAccountInfo(),
        getUserByEmail(session?.user?.email)
    ]);

    const {
        data: { user: destructuredUserObject, loading: profileLoading },
    } = user;

    const output = destructureQueryResults(githubUser);

    const { result: destructuredGithubUser, loading: gitHubrofileLoading } =
        output;

    const userInfo = destructuredUserObject[0];


    const [contributedTo, pinnedItems, subscribedRepos, ownedRepos] = await Promise.all([
        getRepoContributions(),
        getUserPinnedItems(data?.viewer?.login),
        getRepoSubscriptions(userInfo.id),
        getOwnedRepositories(data?.viewer?.login)
    ]);

    const { data: contributionData } = contributedTo;
    const { data: topRepoData } = pinnedItems;
    const { data: repositories } = ownedRepos;
    const { data: subscribedTo } = subscribedRepos;

    return {
        github_user: {
            destructuredGithubUser,
            gitHubrofileLoading,
        },
        currentUser: { ...userInfo, profileLoading },
        user: {
            ...data,
        },
        contributedTo: { ...contributionData.viewer.repositoriesContributedTo },
        pinnedItems: topRepoData.user.pinnedItems,
        repositories: repositories?.user?.repositories,
        subscribedTo: subscribedTo?.user_subscribed_repos,
    };

};