import { fetchChats, sendChatMessage, startNewChat } from "$lib/data/messages";
import { fail, redirect } from "@sveltejs/kit";
import type { PageServerLoad, Actions } from "./$types";
import { error } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ locals }) => {
  const session = await locals.auth.validate()
  if (!session) throw redirect(302, "/login");
  return {
    ...session,
  };
};


export const actions = {
  async sendChatMessage({ locals, request }) {
    const form_data = await request.formData();
    try {
      await sendChatMessage(form_data);
    } catch (error) {
      console.log(error);
      return fail(500);
    }
    return { success: true };
  },
  async startNewChat({ locals, request }) {
    const form_data = await request.formData();
    try {
      await startNewChat(form_data);
    } catch (error) {
      console.log(error);
      return fail(500);
    }
    return { success: true };
  },
} satisfies Actions;
