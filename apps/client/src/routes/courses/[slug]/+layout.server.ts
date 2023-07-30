import type { LayoutServerLoad } from "./$types";
import {
  FETCH_COURSE_BY_SLUG,
  FETCH_USER_COURSE_PROGRESS,
} from "$lib/graphql/queries/courses";
import apolloClient from "$lib/graphql/apolloClient";

export const load: LayoutServerLoad = async ({ params, parent }) => {
  const { session } = await parent();

  const { slug } = params;

  const getCourseData = async () => {
    const { data } = await apolloClient.query({
      query: FETCH_COURSE_BY_SLUG,
      variables: { slug },
    });
    return data.courses[0];
  };

  const getCourseProgress = async () => {
    const { data } = await apolloClient.query({
      query: FETCH_USER_COURSE_PROGRESS,
      variables: {
        slug,
        userId: session?.user?.id,
      },
    });
    return data.user_courses[0];
  };

  return {
    course: getCourseData(),
    progress: getCourseProgress(),
  };
};
