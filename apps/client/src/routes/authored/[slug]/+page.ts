import {
    FETCH_COURSE_BY_SLUG,
} from '$lib/graphql/queries/courses';
import apolloClient from "$lib/graphql/apolloClient";
  import { appwriteServer } from "$lib/appwrite/appwriteServer";

export const load = async (event) => {
    const { params, parent } = event;
    const { slug } = params;

    const { data } = await apolloClient.query({
        query: FETCH_COURSE_BY_SLUG,
        variables: { slug },
    });

    const course = data.courses[0];
    let files;
    try {
        const buckets = await appwriteServer.storage.listFiles("6482292c07f473e25144");
        console.log(buckets?.files[0]);
        $: files = buckets;
      } catch (error) {
        console.log(error);
      }
    return {
        slug,
        course,
        files
    }
}