import {
  FETCH_COURSE_BY_SLUG,
  FETCH_USER_COURSE_PROGRESS,
} from '$lib/queries/courses';
import apolloClient from '$lib/apollo';

export const load = async ({ params }) => {
  const { slug } = params;

  const { data } = await apolloClient.query({
    query: FETCH_COURSE_BY_SLUG,
    variables: { slug },
  });

  const course = data.courses[0];

  if (!course) {
    const error = new Error('Course not found!');
    throw error;
  }

  const activeCourse = await apolloClient.query({
    query: FETCH_USER_COURSE_PROGRESS,
    variables: {
      userId: 'a4f9150e-4619-4b18-807d-2f273b75c12f',
      courseId: course.id,
    },
  });

  const active = activeCourse.data.user_courses[0];

  return {
    course,
    active,
  };
};
