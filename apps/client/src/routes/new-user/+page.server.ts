import { auth } from "$lib/server/lucia";
import { fail, redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";
import { parseFormData, validateFormData } from "bugs-lib/formData";
import { z } from "zod";
import { INSERT_NEW_USER } from "$lib/graphql/mutations/users";
import { mutation } from "svelte-apollo";

const userInfoSchema = z.object({
    email: z.string(),
    fullName: z.string(),
    username: z.string(),
});

export const actions: Actions = {
    default: async ({ locals, request }) => {
        const parsedFormData = parseFormData(await request.formData());
        const {
            formData: { email, fullName, username },
            errors,
        } = validateFormData(parsedFormData, userInfoSchema);
        const insertNewUser = mutation(INSERT_NEW_USER);
        const session = await locals.auth.validate();

        try {
            const result = await insertNewUser({
                variables: {
                    email,
                    name,
                    username,
                },
            });
            console.log("Mutation successful!", result);
        } catch (error) {
            console.log(error);
        }
    }
}