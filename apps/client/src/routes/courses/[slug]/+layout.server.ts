import type { LayoutServerLoad } from './$types';
import {
  FETCH_COURSE_BY_SLUG,
  FETCH_USER_COURSE_PROGRESS,
} from '$lib/graphql/queries/courses';
import { GET_USER_BY_EMAIL } from '$lib/graphql/queries/user';
import apolloClient from '$lib/graphql/apolloClient';
import { GITHUB_API } from '$lib/github/githubGraphQLClient';
import { error } from '@sveltejs/kit';

export const load: LayoutServerLoad = async (event) => {
  const { params, parent } = event;
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
