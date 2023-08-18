import { dev } from '$app/environment';
import { lucia } from 'lucia';
import { sveltekit } from 'lucia/middleware';
import { github } from '@lucia-auth/oauth/providers';
import { postgres as postgresAdapter } from '@lucia-auth/adapter-postgresql';
import { PUBLIC_GITHUB_ID, PUBLIC_GITHUB_SECRET, PUBLIC_DATA_BASE_URL } from '$env/static/public';
import { pg } from "@lucia-auth/adapter-postgresql";
import postgres from "pg";

const pool = new postgres.Pool({
	connectionString: PUBLIC_DATA_BASE_URL
});

export const auth = lucia({
  env: dev ? 'DEV' : 'PROD',
  middleware: sveltekit(),
  adapter: pg(pool, {
		user: "users",
		key: "user_key",
		session: "user_session"
	}),
  getUserAttributes: (data) => {
    console.log("got attrs", data);
    return {
      username: data.username,
      email: data.email,
      name: data.name,
      githubUsername: data.githubUsername
    };
  },
});

export const githubAuth = github(auth, {
  clientId: PUBLIC_GITHUB_ID,
  clientSecret: PUBLIC_GITHUB_SECRET,
});

export type Auth = typeof auth;
