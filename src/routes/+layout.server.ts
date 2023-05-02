import type { LayoutServerLoad } from './$types';
import { SvelteKitAuth } from "@auth/sveltekit";

export const load: LayoutServerLoad = async (event) => {

  console.log(SvelteKitAuth);
  return {
    session: await event.locals.getSession(),
  };
};