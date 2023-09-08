import {
    FETCH_REPOSITORIES_BY_TOPICS,
    GET_AVAILABLE_TOPICS,
    GET_SUBSCRIBED_REPOS,
} from "$lib/graphql/queries/repositories.js";
import apolloClient from "$lib/graphql/apolloClient";
import { stringifyTopics } from "bugs-lib";


export const searchRepositoriesByTopic = async (topics: Array<string>, limit: number) => {
    const result = await apolloClient.query({
        query: FETCH_REPOSITORIES_BY_TOPICS,
        variables: {
            topics: stringifyTopics(topics),
            limit
        },
    });
    return result;
}