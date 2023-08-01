import { fetchChats, sendChatMessage, startNewChat } from "$lib/data/messages";
import { fail, redirect } from "@sveltejs/kit";
import { error } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ params, parent }) => {
  const { session } = await parent();

  const response = await fetchChats(session?.user?.id);
  console.log(response?.data);
  return {
    chats: response?.data.chats,
    loading: response?.loading,
    user: session?.user
  };
};
