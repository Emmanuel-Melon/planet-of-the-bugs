import type { Actions, PageServerLoad } from "./$types";
import { handleDeleteChapter, handleUpdateChapter } from "../../actions";

export const actions: Actions = {
  updateChapter: handleUpdateChapter,
  deleteChapter: handleDeleteChapter,
};
