import type { Actions, PageServerLoad } from "./$types";
import { updateCourseAction, deleteChapterAction, updateChapterAction } from "../../actions";

export const actions: Actions = {
  updateCourseAction,
  updateChapterAction,
  deleteChapterAction,
};
