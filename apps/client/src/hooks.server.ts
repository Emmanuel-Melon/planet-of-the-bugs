import { auth } from "$lib/server/lucia";
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
  // we can pass `event` because we used the SvelteKit middleware
  event.locals.auth = auth.handleRequest(event);
  // console.log(event.locals);
  return await resolve(event);
};
