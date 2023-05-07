
import { SvelteKitAuth } from "@auth/sveltekit";
import GitHub from "@auth/core/providers/github";
import Google from "@auth/core/providers/google";
import { sequence } from '@sveltejs/kit/hooks';



import {
  PUBLIC_GOOGLE_CLIENT_ID,
  PUBLIC_GOOGLE_CLIENT_SECRET,
  PUBLIC_AUTH_SECRET,
  PUBLIC_GITHUB_ID,
  PUBLIC_GITHUB_SECRET,
  PUBLIC_GITHUB_API_ENDPOINT
} from "$env/static/public";

/** @type {import('@sveltejs/kit').HandleFetch} */
export async function handleFetch({ request, fetch }) {
  request.headers.set('x-secure', 'Test')


  return fetch(request)
}


export const handleGitHubAuth = async (data) => {



  const { resolve, event } = data;
  const response = await resolve(event);
  



  const sess = await event.locals.getSession();


  return response;
}

export const handleCors = async (data) => {
  const { resolve, event } = data;
  const response = await resolve(event);



  response.headers.append('Access-Control-Allow-Methods', `GET, POST, PUT, DELETE, PATCH, OPTIONS`);
  response.headers.append('Access-Control-Allow-Origin', `*`);
  response.headers.append('Access-Control-Allow-Headers', `*`);
  return response;
};

export const handleAuth = SvelteKitAuth({
  providers: [
    GitHub({
      clientId: PUBLIC_GITHUB_ID,
      clientSecret: PUBLIC_GITHUB_SECRET,
    })
  ],
  secret: PUBLIC_AUTH_SECRET,
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
      const { session, token } = data;

      // console.log("got session");
      //console.log(session);
      //console.log(token);

      // custom jwt
      // const encodedToken = jwt.sign({ ...token?.user }, jwtSecret, { algorithm: 'HS256'});
      // session.accessToken = token.accessToken;
      // session.user.id = token.id;
      // session.jwt = encodedToken;
      // pick certain fields
      // session.user = token?.user;
      // session.id_token = token.id_token
      session.token = token;
      return session;
    },
    async jwt(data) {
      const { token, user, account, profile, isNewUser } = data;
      if (account) {
        console.log("got account");
        //console.log(account);
        token.accessToken = account.access_token
        // token.id = profile.id
        // token.id_token = account.id_token
      }

      if (user) {
        // token.user = user
      }


      if (profile) {
        // token.profile = profile
      }
      return token;
    },
  },
  debug: true,
  pages: {
    newUser: '/auth/new-user'
  }
});

export const handle = sequence(handleAuth, handleCors, handleGitHubAuth);