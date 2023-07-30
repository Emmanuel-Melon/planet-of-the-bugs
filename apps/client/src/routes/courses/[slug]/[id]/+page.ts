import { FETCH_LESSON_BY_PK } from "$lib/graphql/queries/lessons";
import apolloClient from "$lib/graphql/apolloClient";

export const load = async ({ params }) => {
  const getLessonContent = async () => {
    const { data } = await apolloClient.query({
      query: FETCH_LESSON_BY_PK,
      variables: {
        id: params.id,
      },
    });
    return data.lessons_by_pk;
  };

  return {
    lesson: getLessonContent(),
  };
};
