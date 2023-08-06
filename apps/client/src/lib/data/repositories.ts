import {
    FETCH_REPOSITORIES_BY_TOPICS,
    GET_AVAILABLE_TOPICS,
    GET_SUBSCRIBED_REPOS,
} from "$lib/graphql/queries/repositories.js";
import apolloClient from "$lib/graphql/apolloClient";

export const getUserSubscribedRepos = (userId: string): Promise<any[]> => {
    return apolloClient.query({
        query: GET_SUBSCRIBED_REPOS,
        variables: {
          user_id: userId,
        },
      })
}