import { FETCH_LESSON_BY_PK } from "$lib/graphql/queries/lessons";
import apolloClient from "$lib/graphql/apolloClient";
export const load = async ({ params }) => {
  const { id } = params;

  const lesson = await apolloClient.query({
    query: FETCH_LESSON_BY_PK,
    variables: {
      id: id,
    },
  });

  return {
    id,
    lesson: {
      ...lesson,
    },
  };
};
