import { SvelteKitAuth } from "@auth/sveltekit";
import GitHub from "@auth/core/providers/github";
import Google from "@auth/core/providers/google";
import {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  PRIVATE_AUTH_SECRET,
  PRIVATE_GITHUB_ID,
  PRIVATE_GITHUB_SECRET,
} from "$env/static/private";

export const handle = SvelteKitAuth({
  providers: [
    GitHub({
      clientId: PRIVATE_GITHUB_ID,
      clientSecret: PRIVATE_GITHUB_SECRET,
    }),
    Google({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: PRIVATE_AUTH_SECRET,
  trustHost: true,
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return {
        user,
        account,
        profile,
        email,
      };
    },
    async session(data) {
      console.log("got data");
      console.log(data);

      const { session, token } = data;
  
      // custom jwt
      // const encodedToken = jwt.sign({ ...token?.user }, jwtSecret, { algorithm: 'HS256'});
      // session.accessToken = token.accessToken;
      // session.user.id = token.id;
      // session.jwt = encodedToken;
      // pick certain fields
      // session.user = token?.user;
      // session.id_token = token.id_token
      return session;
    },
    async jwt(data) {
      const { token, user, account, profile, isNewUser } = data;
      if (account) {
        
        // token.accessToken = account.access_token
        // token.id = profile.id
        // token.id_token = account.id_token
        console.log("got account");
        console.log(account);
      }

      if(user) {
        // token.user = user
        console.log("got user");
        console.log(user);
      }


      if(profile) {
        // token.profile = profile
        console.log("got profile");
        console.log(profile);
      }
      return token;
    },
  },
  debug: true,
  pages: {
    newUser: '/auth/new-user'
  }
});
