import { fetchChats, sendMessages } from "$lib/data/messages";
import { fail, redirect } from "@sveltejs/kit";
import type { PageServerLoad, Actions } from "./$types";
import { error } from "@sveltejs/kit";

export const load: PageServerLoad = async (e) => {
  const chats = await fetchChats();
  return {
    chats,
  };
};

export const actions = {
  async delete({ locals, request }) {
    const form_data = await request.formData();
    try {
      await sendMessages();
    } catch (e) {
      console.log(e);
      return fail(500);
    }
    return { success: true };
  },
} satisfies Actions;
