import { getCourseData } from "$lib/data/courses";
import { getUserCourseProgress } from "$lib/data/user";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ params, parent }) => {
  const { slug } = params;

  return {
    course: getCourseData(slug),
    progress: getUserCourseProgress(slug, ""),
  };
};
