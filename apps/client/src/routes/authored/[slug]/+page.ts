import {
  FETCH_COURSE_BY_SLUG,
} from '$lib/graphql/queries/courses';
import apolloClient from "$lib/graphql/apolloClient";
import { USER_BASIC_INFO } from "$lib/graphql/queries/user";
import { appwriteServer } from "$lib/appwrite/appwriteServer";
import { destructureQueryResults } from "$lib/graphql/helpers";

export const load = async (event) => {
  const { params, parent } = event;
  const { slug } = params;
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

  const { data } = await apolloClient.query({
    query: FETCH_COURSE_BY_SLUG,
    variables: { slug },
  });

  const course = data.courses[0];
  const userInfo = destructuredUserObject[0];
  let files;
  try {
    const buckets = await appwriteServer.storage.listFiles("6482292c07f473e25144");
    console.log(buckets?.files[0]);
  } catch (error) {
    console.log(error);
  }
  return {
    slug,
    course,
    files,
    user: { ...userInfo, profileLoading },
  }
}