import { SvelteKitAuth } from "@auth/sveltekit";
import GitHub from "@auth/core/providers/github";
import Google from "@auth/core/providers/google";
import Linkedin from "@auth/core/providers/linkedin";
import { sequence } from "@sveltejs/kit/hooks";
import type { Handle } from "@sveltejs/kit";
import BugsClientCustomAdapter from "$lib/auth/BugsClientCustomAdapter";
import apolloClient from "$lib/graphql/apolloClient";

import {
  PUBLIC_GOOGLE_CLIENT_ID,
  PUBLIC_GOOGLE_CLIENT_SECRET,
  PUBLIC_AUTH_SECRET,
  PUBLIC_GITHUB_ID,
  PUBLIC_GITHUB_SECRET,
  PUBLIC_LINKEDIN_CLIENT_ID,
  PUBLIC_LINKEDIN_CLIENT_SECRET,
  PUBLIC_DATA_BASE_URL,
} from "$env/static/public";

export const handleCors = async (data) => {
  const { resolve, event } = data;
  const response = await resolve(event);
  response.headers.append("Access-Control-Allow-Origin", `*`);
  response.headers.append(
    "Access-Control-Allow-Methods",
    `GET, POST, PUT, DELETE, PATCH, OPTIONS`
  );
  response.headers.append(
    "Access-Control-Allow-Headers",
    "Content-Type, Origin, Accept, token"
  );
  return response;
};

async function authorization(data) {
  const { resolve, event } = data;
  // const session = await event.locals.getSession();
  // If the request is still here, just proceed as normally
  //console.log(Object.keys(event.locals));
  // console.log(event.locals);
  return resolve();
}

export const handleAuth = SvelteKitAuth(async () => {
  const authOptions = {
    bugsClientCustomAdapter: BugsClientCustomAdapter(apolloClient),
    providers: [
      GitHub({
        clientId: PUBLIC_GITHUB_ID,
        clientSecret: PUBLIC_GITHUB_SECRET,
      }),
      Google({
        clientId: PUBLIC_GOOGLE_CLIENT_ID,
        clientSecret: PUBLIC_GOOGLE_CLIENT_SECRET,
      }),
      Linkedin({
        clientId: PUBLIC_LINKEDIN_CLIENT_ID,
        clientSecret: PUBLIC_LINKEDIN_CLIENT_SECRET,
      }),
    ],
    database: PUBLIC_DATA_BASE_URL,
    secret: PUBLIC_AUTH_SECRET,
    session: {
      strategy: "jwt",
    },
    trustHost: true,
    pages: {
      signIn: "/auth/signin",
      newUser: "/auth/new-user",
      error: "/auth/error",
      verifyRequest: "/auth/verify",
    },
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
        session.token = token;
        return session;
      },
      async jwt(data) {
        const { token, user, account, profile, isNewUser } = data;
        if (account) {
          token.accessToken = account.access_token;
        } else if (Date.now() < token.expires_at!) {
          // If the access token has not expired yet, return it
          return token;
        }

        if (user) {
          token.user = user;
        }
        if (profile) {
          // token.profile = profile
        }
        return token;
      },
      debug: true,
    },
  };
  return authOptions;
}) satisfies Handle;

export const handle = sequence(handleAuth);
