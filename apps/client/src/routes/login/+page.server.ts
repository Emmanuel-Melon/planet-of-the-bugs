// routes/login/+page.server.ts
import { auth } from "$lib/auth/lucia";
import { redirect } from "@sveltejs/kit";

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
    console.log("session", session);
	if (session) throw redirect(302, "/");
	return {};
};