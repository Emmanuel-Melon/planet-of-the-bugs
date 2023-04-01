import apolloClient from '$lib/apollo';
import {
  FETCH_LESSON_BY_INDEX,
  FETCH_LESSON_BY_PK,
} from '$lib/queries/lessons';

export const load = async ({ params }) => {
  const { lesson } = params;

  const { data } = await apolloClient.query({
    query: FETCH_LESSON_BY_PK,
    variables: {
      id: lesson,
    },
  });

  let content = data.lessons_by_pk;

  return {
    lesson: content,
  };
};
