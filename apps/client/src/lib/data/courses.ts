import apolloClient from '$lib/graphql/apolloClient';
import { UPDATE_CHAPTER, UPDATE_COURSE } from '$lib/graphql/mutations/courses';
import { FETCH_COURSE_BY_SLUG } from '$lib/graphql/queries/courses';
import { FETCH_LESSON_BY_PK } from '$lib/graphql/queries/lessons';

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

export const updateCourseChapter = async (
  courseId: String,
  chapterIndex: number,
  title: String,
  description: String
) => {
  const { data } = await apolloClient.mutate({
    mutation: UPDATE_CHAPTER,
    variables: {
      courseId,
      chapterIndex,
      title,
      description,
    },
  });
  return data.update_course_chapters;
};

export const updateCourseDetails = async (
  id: string,
  slug: string,
  title: string,
  description: string,
  complexity: string,
  cover: string
) => {
  const { data } = await apolloClient.mutate({
    mutation: UPDATE_COURSE,
    variables: {
      id,
      slug,
      title,
      description,
      complexity,
      cover,
    },
  });
  return data;
};
