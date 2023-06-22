import { USER_BASIC_INFO, USER_BY_ACCOUNT } from "$lib/graphql/queries/user";
import { INSERT_NEW_USER } from "$lib/graphql/mutations/users";


export default function BugsClientCustomAdapter(client, options = {}) {
    return {
        async createUser(user) {
            try {
                console.log("yooooooooo custom!");
                const user = await client.mutation({
                    mutation: INSERT_NEW_USER,
                    variables: {
                      name: "Emmanuel G. Daniel",
                      email: "eman@planetofthebugs.xyz",
                      username: "eman"
                    },
                  });

                console.log(user);
                return null
                
            } catch (error) {
                console.log(error);
            }
        },
        async getUser(id) {
            return null
        },
        async getUserByEmail(email) {
            const user = await client.query({
                query: USER_BASIC_INFO,
                variables: {
                  email: "emmanuelgatwech@gmail.com",
                },
              });
            return user
        },
        async getUserByAccount({ providerAccountId, provider }) {
            const account = await client.query({
                query: USER_BY_ACCOUNT,
                variables: {
                  id: "",
                },
              });
            return account
        },
        async updateUser(user) {
            return null
        },
        async linkAccount(account) {
            return null
        },
        async createSession({ sessionToken, userId, expires }) {
            return null
        },
        async getSessionAndUser(sessionToken) {
            return null
        },
        async updateSession({ sessionToken }) {
            return null
        },
        async deleteSession(sessionToken) {
            return null
        },
        async createVerificationToken({ identifier, expires, token }) {
            return null
        },
        async useVerificationToken({ identifier, token }) {
            return null
        },
    }
}