import { FETCH_COURSE_BY_SLUG } from '$lib/queries/courses';
import apolloClient from '$lib/apollo';

export const load = async ({ params }) => {
  const { slug } = params;

  const { data } = await apolloClient.query({
    query: FETCH_COURSE_BY_SLUG,
    variables: { slug },
  });

  return {
    course: data.courses,
  };
};
