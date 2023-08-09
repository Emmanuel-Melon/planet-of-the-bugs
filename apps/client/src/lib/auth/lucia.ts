import { dev } from '$app/environment';
import { lucia } from 'lucia';
import { sveltekit } from 'lucia/middleware';
import { github } from '@lucia-auth/oauth/providers';
import { postgres as postgresAdapter } from '@lucia-auth/adapter-postgresql';
import { DATA_BASE_URL } from '$env/static/private';
import { PUBLIC_GITHUB_ID, PUBLIC_GITHUB_SECRET } from '$env/static/public';
import postgres from 'postgres';

const sql = postgres(DATA_BASE_URL);

export const auth = lucia({
  env: dev ? 'DEV' : 'PROD',
  middleware: sveltekit(),
  adapter: postgresAdapter(sql, {
    user: 'users',
    key: 'user_key',
    session: 'user_session',
  }),
  getUserAttributes: (data) => {
    return {
      username: data.username,
      email: data.email,
      name: data.name,
      hasConnectedGithub: data.hasConnectedGithub,
      githubUsername: data.githubUsername,
      avatar: data.avatar,
    };
  },
});

export const githubAuth = github(auth, {
  clientId: PUBLIC_GITHUB_ID,
  clientSecret: PUBLIC_GITHUB_SECRET,
});

export type Auth = typeof auth;
