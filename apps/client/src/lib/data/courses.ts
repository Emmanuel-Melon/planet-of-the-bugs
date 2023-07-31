import apolloClient from "$lib/graphql/apolloClient";
import { FETCH_COURSE_BY_SLUG } from "$lib/graphql/queries/courses";
import { FETCH_LESSON_BY_PK } from "$lib/graphql/queries/lessons";

export const getCourseData = async (slug: String) => {
  const { data } = await apolloClient.query({
    query: FETCH_COURSE_BY_SLUG,
    variables: { slug },
  });
  return data.courses[0];
};

export const getLessonContent = async (lessonId: String) => {
  const { data } = await apolloClient.query({
    query: FETCH_LESSON_BY_PK,
    variables: {
      id: lessonId,
    },
  });
  return data.lessons_by_pk;
};
