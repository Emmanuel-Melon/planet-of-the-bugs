import {
  FETCH_COURSE_BY_SLUG,
} from '$lib/graphql/queries/courses';
import apolloClient from "$lib/graphql/apolloClient";
import { GET_USER_BY_EMAIL } from "$lib/graphql/queries/user";
import { appwriteServer } from "$lib/appwrite/appwriteServer";
import { destructureQueryResults } from "$lib/graphql/helpers";

export const load = async (event) => {
  const { params, parent } = event;
  const { slug } = params;
  const { session } = await parent();

  const user = await apolloClient.query({
    query: GET_USER_BY_EMAIL,
    variables: {
      email: session?.user?.email,
    },
  });

  const {
    data: { user: destructuredUserObject, loading: profileLoading },
  } = user;

  const { data } = await apolloClient.query({
    query: FETCH_COURSE_BY_SLUG,
    variables: { slug },
  });

  const course = data.courses[0];
  const userInfo = destructuredUserObject[0];
  // let files = await appwriteServer.storage.listFiles(course.bucketId);
  return {
    slug,
    course,

    user: { ...userInfo, profileLoading },
  }
}