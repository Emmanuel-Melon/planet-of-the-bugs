import { dev } from "$app/environment";
import { lucia } from "lucia";
import { sveltekit } from "lucia/middleware";
import { github } from "@lucia-auth/oauth/providers";
import {
  PUBLIC_GITHUB_ID,
  PUBLIC_GITHUB_SECRET,
  PUBLIC_AUTH_DB_URL,
} from "$env/static/public";
import { pg } from "@lucia-auth/adapter-postgresql";
import postgres from "pg";

const pool = new postgres.Pool({
  connectionString: PUBLIC_AUTH_DB_URL,
});

export const auth = lucia({
  adapter: pg(pool, {
    user: "auth_user",
    key: "user_key",
    session: "user_session",
  }),
  env: dev ? "DEV" : "PROD",
  middleware: sveltekit(),
  getUserAttributes: (data) => {
    return {
      github_username: data.github_username,
      email: data.email,
    };
  },
});

export const githubAuth = github(auth, {
  clientId: PUBLIC_GITHUB_ID,
  clientSecret: PUBLIC_GITHUB_SECRET,
});

export type Auth = typeof auth;
