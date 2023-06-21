export default function BugsClientCustomAdapter(client, options = {}) {
    return {
        async createUser(user) {
            return
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
        async deleteUser(userId) {
            return
        },
        async linkAccount(account) {
            return
        },
        async unlinkAccount({ providerAccountId, provider }) {
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