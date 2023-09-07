import type { Actions, PageServerLoad } from "./$types";
import {
  updateCourseAction,
  deleteCourseAction,
  deleteChapterAction,
  updateChapterAction,
  updateLessonDetailsAction,
  deleteLessonAction,
} from "../../actions";

export const actions: Actions = {
  updateCourseAction,
  deleteCourseAction,
  updateChapterAction,
  deleteChapterAction,
  updateLessonDetailsAction,
  deleteLessonAction,
};
