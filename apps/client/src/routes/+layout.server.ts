import type { LayoutServerLoad, PageLoad } from './$types';
import { redirect } from "@sveltejs/kit"

export const load: LayoutServerLoad = async (event) => {
  try {
    const session = await event.locals.getSession();
    // console.log("session");
    // console.log(session);
    if (session === null) {
      throw redirect(302, "/auth")
    }
    return {
      session
    };
  } catch (err) {
    console.log(err);
  }
};