import apolloClient from "$lib/graphql/apolloClient";
import { FETCH_USER_COURSE_PROGRESS } from "$lib/graphql/queries/courses";

export const getUserCourseProgress = async (slug: String, userId: String) => {
  const { data } = await apolloClient.query({
    query: FETCH_USER_COURSE_PROGRESS,
    variables: {
      slug,
      userId: userId,
    },
  });
  return data.user_courses[0];
};
