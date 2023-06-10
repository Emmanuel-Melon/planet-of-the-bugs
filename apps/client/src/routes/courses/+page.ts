import { USER_BASIC_INFO } from "$lib/graphql/queries/user";
import apolloClient from "$lib/graphql/apolloClient";
import { destructureQueryResults } from "$lib/graphql/helpers";
export const load = async (event) => {

    const { parent, data: pageData } = event;

    const { session } = await parent();

    const user = await apolloClient.query({
        query: USER_BASIC_INFO,
        variables: {
            email: session?.user?.email,
        },
    });

    const {
        data: { user: destructuredUserObject, loading: profileLoading },
    } = user;

    const userInfo = destructuredUserObject[0];

    return {
        user: { ...userInfo, profileLoading },
    };
};