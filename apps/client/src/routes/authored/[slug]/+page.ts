import {
    FETCH_COURSE_BY_SLUG,
} from '$lib/graphql/queries/courses';
import apolloClient from "$lib/graphql/apolloClient";
import { sdk, server } from "$lib/appwrite/appwriteClient";

export const load = async (event) => {
    const { params, parent } = event;
    const { slug } = params;

    const { data } = await apolloClient.query({
        query: FETCH_COURSE_BY_SLUG,
        variables: { slug },
    });

    const course = data.courses[0];

    // const bucket = await sdk.storage.listFiles(course?.bucketId);
    // console.log(bucket);

    return {
        slug,
        course
    }
}