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

export const actions: Actions = {
	logout: async ({ locals }): Promise<ActionFailure> => {
		const session = await locals.auth.validate();
		if (!session) return fail(401);
		await auth.invalidateSession(session.sessionId); // invalidate session
		locals.auth.setSession(null); // remove cookie
		throw redirect(302, "/login"); // redirect to login page
	}
};
