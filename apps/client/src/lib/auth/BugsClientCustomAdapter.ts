import { GET_USER_BY_EMAIL, USER_BY_ACCOUNT, GET_SESSION_AND_USER, GET_USER_BY_ID } from "$lib/graphql/queries/user";
import { INSERT_NEW_ACCOUNT, INSERT_NEW_SESSION, INSERT_NEW_USER, UPADTE_SESSION, DELETE_SESSION, UPADTE_USER, INSERT_NEW_VERIFICATION_TOKEN } from "$lib/graphql/mutations/users";


export default function BugsClientCustomAdapter(client, options = {}) {
    return {
        async createUser(data) {
            try {
                console.log("welcome!");
                console.log(data);
                const user = await client.mutation({
                    mutation: INSERT_NEW_USER,
                    variables: {
                        ...data
                    },
                });
                console.log(user);
                return user;

            } catch (error) {
                console.log(error);
            }
        },
        async getUser(id) {
            const user = await client.query({
                query: GET_USER_BY_ID,
                variables: {
                    id,
                },
            });
            return user
        },
        async getUserByEmail(email) {
            const user = await client.query({
                query: GET_USER_BY_EMAIL,
                variables: {
                    email,
                },
            });
            return user
        },
        async getUserByAccount({ providerAccountId, provider }) {
            const account = await client.query({
                query: USER_BY_ACCOUNT,
                variables: {
                    providerAccountId: "github",
                    provider: "github"
                },
            });
            return account
        },
        async updateUser(user) {
            try {
                const updatedUser = await client.mutation({
                    mutation: UPADTE_USER,
                    variables: {
                        ...user
                    },
                });
                console.log(updatedUser);
                return updatedUser;
            } catch (error) {
                console.log(error);
            }
        },
        async linkAccount(data) {
            console.log("linking account!");
            console.log(data);
            const account = await client.mutation({
                mutation: INSERT_NEW_ACCOUNT,
                variables: {
                    ...data
                },
            });
            console.log(account);
            return account;
        },
        async createSession({ sessionToken, userId, expires }) {
            const session = await client.mutation({
                mutation: INSERT_NEW_SESSION,
                variables: {
                    sessionToken,
                    userId,
                    expires
                },
            });
            console.log(session);
            return session;
        },
        async getSessionAndUser(sessionToken) {
            const sessionAndUser = await client.query({
                query: GET_SESSION_AND_USER,
                variables: {
                    sessionToken
                },
            });
            return sessionAndUser;
        },
        async updateSession({ sessionToken }) {
            const updatedSession = await client.mutation({
                mutation: UPADTE_SESSION,
                variables: {
                    sessionToken
                },
            });
            console.log(updatedSession);
            return updatedSession;
        },
        async deleteSession(sessionToken) {
            const session = await client.mutation({
                mutation: DELETE_SESSION,
                variables: {
                    sessionToken
                },
            });
            console.log(session);
            return session;
        },
        async createVerificationToken({ identifier, expires, token }) {
            const verificationToken = await client.mutation({
                mutation: INSERT_NEW_VERIFICATION_TOKEN,
                variables: {
                    identifier,
                    token,
                    expires
                },
            });
            console.log(verificationToken);
            return verificationToken;
        },
        async useVerificationToken({ identifier, token }) {
            return null
        },
    }
}