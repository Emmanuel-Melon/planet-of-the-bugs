import {
  FETCH_COURSE_BY_SLUG,
  FETCH_USER_COURSE_PROGRESS,
} from '$lib/graphql/queries/courses';
import { GET_USER_BASIC_INFO_BY_EMAIL } from '$lib/graphql/queries/user';
import apolloClient from '$lib/graphql/apolloClient';
import { GITHUB_API } from '$lib/github/githubGraphQLClient';
import { error } from '@sveltejs/kit';

export const load = async (event) => {
  const { params, parent } = event;
  const { session } = await parent();

  const { slug } = params;

  const { data } = await apolloClient.query({
    query: FETCH_COURSE_BY_SLUG,
    variables: { slug },
  });

  const { data: userInfo } = await apolloClient.query({
    query: GET_USER_BASIC_INFO_BY_EMAIL,
    variables: {
      email: session?.user?.email,
    },
  });

  const course = data.courses[0];

  const activeCourse = await apolloClient.query({
    query: FETCH_USER_COURSE_PROGRESS,
    variables: {
      userId: userInfo.user[0].id,
      courseId: course.id,
    },
  });

  const active = activeCourse.data.user_courses[0];

  return {
    course,
    active,
  };
};
