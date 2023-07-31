// src/lib/server/lucia.ts
import { lucia } from "lucia";
import { sveltekit } from "lucia/middleware";
// import { dev } from "$app/environment";

export const auth = lucia({
	adapter: ADAPTER,
	env: "DEV",
	middleware: sveltekit(),

	getUserAttributes: (data) => {
		return {
			username: data.username
		};
	}
});

export type Auth = typeof auth;