import type { Actions, PageServerLoad } from "./$types";
import { deleteChapterAction, updateChapterAction } from "../../actions";

export const actions: Actions = {
  updateChapterAction,
  deleteChapterAction,
};
