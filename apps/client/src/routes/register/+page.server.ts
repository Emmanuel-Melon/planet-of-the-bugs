import { fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import { auth } from "$lib/server/lucia";
import { v4 as uuidv4 } from "uuid";
import { parseFormData, validateFormData } from "bugs-lib/formData";
import { z } from "zod";

const registerSchema = z.object({
  username: z.string({ required_error: "Username is required " }),
  password: z.string(),
});

// auth_session cookie not being set
export const load: PageServerLoad = async ({ locals }) => {
  const session = await locals.auth.validate();
  console.log("session", session);
  // if (!session) throw redirect(302, '/login');
};

export const actions: Actions = {
  default: async ({ request, locals }) => {
    const parsedFormData = parseFormData(await request.formData());
    const {
      formData: { password, username },
      errors,
    } = validateFormData(parsedFormData, registerSchema);

    if (errors) {
      console.log("form data is invalid");
    }

    try {
      // create custom key via auth.createKey?
      const user = await auth.createUser({
        // change db value to userId
        user_id: uuidv4(),
        // invoke useKey()
        key: {
          providerId: "username", // auth method
          providerUserId: username?.toLowerCase(), // unique id when using "username" auth method
          password, // hashed by Lucia
          user_id: uuidv4(),
        },
        // are we passing null attributes?
        attributes: {
          username,
        },
      });
      console.log(user);
      const session = await auth.createSession({
        userId: user.userId,
        attributes: {},
      });
      locals.auth.setSession(session); // set session cookie
      throw redirect(302, "/login");
    } catch (error) {
      console.log("failed to create user");
      console.log(error);
      return fail(402, { message: "Cannot signup" });
    }
  },
};
