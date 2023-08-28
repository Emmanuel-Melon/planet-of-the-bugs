import { auth } from "$lib/server/lucia";
import { ActionFailure, fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
  const session = await locals.auth.validate()
  if (!session) throw redirect(302, "/login");
  return {
    ...session,
  };
};