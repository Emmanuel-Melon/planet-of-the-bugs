// routes/login/+page.server.ts
import { auth } from "$lib/server/lucia";
import { fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import { parseFormData, validateFormData } from "bugs-lib/formData";
import { z } from "zod";

const loginSchema = z.object({
	username: z.string({ required_error: "Username is required " }).trim(),
	password: z.string().min(8, { message: "Must be 8 characters long "})
});

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	console.log("session", session);
	// if (session) throw redirect(302, "/");
};

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const parsedFormData = parseFormData(await request.formData());
		const { formData: { password, username }, errors } = validateFormData(parsedFormData, loginSchema);

		if (errors) {
			console.log("form data is invalid");
		}
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