import { GITHUB_USER_BASIC_INFO } from "$lib/graphql/queries/user";
import { INSERT_NEW_USER } from "$lib/graphql/mutations/users";
import { mutation } from "svelte-apollo";

export default async function BugsClientCustomAdapter(client = null, options = {}) {
    return {
        async createUser(user) {
            try {
                console.log("yooooooooo custom!");
                const insertNewUser = mutation(INSERT_NEW_USER);
                const result = await insertNewUser({
                    variables: {
                        ...user
                    },
                });

                console.log(result);
            } catch (error) {
                console.log(error);
            }
        },
        async getUser(id) {
            return
        },
        async getUserByEmail(email) {
            return
        },
        async getUserByAccount({ providerAccountId, provider }) {
            return
        },
        async updateUser(user) {
            return
        },
        async linkAccount(account) {
            return
        },
        async createSession({ sessionToken, userId, expires }) {
            return
        },
        async getSessionAndUser(sessionToken) {
            return
        },
        async updateSession({ sessionToken }) {
            return
        },
        async deleteSession(sessionToken) {
            return
        },
        async createVerificationToken({ identifier, expires, token }) {
            return
        },
        async useVerificationToken({ identifier, token }) {
            return
        },
    }
}