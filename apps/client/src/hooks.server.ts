
import { SvelteKitAuth } from "@auth/sveltekit";
import GitHub from "@auth/core/providers/github";
import Google from "@auth/core/providers/google";
import { sequence } from '@sveltejs/kit/hooks';
import { redirect } from '@sveltejs/kit';
import type { Handle } from "@sveltejs/kit";


import {
  PUBLIC_GOOGLE_CLIENT_ID,
  PUBLIC_GOOGLE_CLIENT_SECRET,
  PUBLIC_AUTH_SECRET,
  PUBLIC_GITHUB_ID,
  PUBLIC_GITHUB_SECRET,
  PUBLIC_GITHUB_API_ENDPOINT
} from "$env/static/public";

/** @type {import('@sveltejs/kit').HandleFetch} */
export async function handleFetch(data) {
  const { request, fetch } = data;
  request.headers.set('x-secure', 'Test');
  return fetch(request)
}

export const handleCors = async (data) => {
  const { resolve, event } = data;
  const response = await resolve(event);
  response.headers.append('Access-Control-Allow-Methods', `GET, POST, PUT, DELETE, PATCH, OPTIONS`);
  response.headers.append('Access-Control-Allow-Origin', `*`);
  response.headers.append('Access-Control-Allow-Headers', `*`);
  return response;
};

async function authorization({ event, resolve }) {
  // Protect any routes under /authenticated
  const session = await event.locals.getSession();
  if (!session) {
    throw redirect(303, "/auth");
  }

  // If the request is still here, just proceed as normally
  return resolve(event);
}

export const handleAuth = SvelteKitAuth(async () => {
  const authOptions = {
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
        session.token = token;
        return session;
      },
      async jwt(data) {
        const { token, user, account, profile, isNewUser } = data;
        if (account) {
          token.accessToken = account.access_token
        }

        if (user) {
          // token.user = user
        }
        if (profile) {
          // token.profile = profile
        }
        return token;
      },
      debug: true,
      pages: {
        newUser: '/auth/new-user'
      }
    }
  }
  return authOptions;
}) satisfies Handle;

export const handle = sequence(handleAuth, handleCors);