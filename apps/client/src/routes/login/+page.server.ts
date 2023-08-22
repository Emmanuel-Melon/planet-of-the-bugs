// routes/login/+page.server.ts
import { auth } from "$lib/auth/lucia";
import { fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import { parseFormData } from "bugs-lib/parseFormData";

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	console.log("session", session);
	if (session) throw redirect(302, "/");
};

export const actions: Actions = {
	default: async ({ request, locals }) => {
		console.log("we really got this?", locals);
		const { username, password } = parseFormData(await request.formData());
		try {
			const key = await auth.getKey("username", username);
			const validatedKey = auth.useKey("username", username, password);
			const session = await auth.createSession({
				userId: key.userId,
				attributes: {}
			});
			locals.auth.setSession(session); // set session cookie
			throw redirect(302, "/login");
		} catch (error) {
			console.log("failed to login user");
			console.log(error);
			return fail(402, { message: "Cannot login" });
		}

	}
}