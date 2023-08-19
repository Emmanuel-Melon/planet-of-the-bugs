import { redirect  } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import { auth } from "$lib/auth/lucia";
import { v4 as uuidv4 } from 'uuid';

export const load: PageServerLoad = async ({ locals }) => {

}

export const actions: Actions = {
    default: async ({ request, locals }) => {
        const formData = await request.formData();
		const username = formData.get("username");
		const password = formData.get("password");


        try {
			const user = await auth.createUser({
				userId: uuidv4(),
				key: {
					providerId: "username", // auth method
					providerUserId: username?.toLowerCase(), // unique id when using "username" auth method
					password // hashed by Lucia
				},
				attributes: {
					username
				}
			});
            console.log(user);
			// const session = await auth.createSession({
			// 	userId: user.userId,
			// 	attributes: {}
			// });
			// locals.auth.setSession(session); // set session cookie
        } catch (error) {
            console.log("failed to create user");
            console.log(error);
        }
    }
}