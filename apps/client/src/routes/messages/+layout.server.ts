import { fetchChats, sendChatMessage, startNewChat } from "$lib/data/messages";
import { fail, redirect } from "@sveltejs/kit";
import { error } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ params, parent }) => {
  const { session } = await parent();
  const { data, loading } = await fetchChats(session?.user?.id);
  return {
    chats: data.chats,
    loading,
    user: session?.user,
  };
};
