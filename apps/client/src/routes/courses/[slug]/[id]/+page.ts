import { getLessonContent } from "$lib/data/courses.js";

export const load = async ({ params }) => {
  return {
    lesson: getLessonContent(params.id),
  };
};
