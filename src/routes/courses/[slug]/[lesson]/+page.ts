import apolloClient from '$lib/apollo';
import {
  FETCH_CHAPTER_LESSONS_COUNT,
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

  const count = await apolloClient.query({
    query: FETCH_CHAPTER_LESSONS_COUNT,
    variables: {
      chapter_id: content.chapter_id,
    },
  });

  return {
    lesson: content,
    lessons_total: count.data.lessons_aggregate.aggregate.count,
  };
};
