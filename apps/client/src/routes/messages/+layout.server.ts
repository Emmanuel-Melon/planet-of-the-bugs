import { fetchChats, sendChatMessage, startNewChat } from "$lib/data/messages";
import { fail, redirect } from "@sveltejs/kit";
import { error } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ params, parent }) => {};
