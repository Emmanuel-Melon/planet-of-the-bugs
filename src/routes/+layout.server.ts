import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

// add headers dynamically for every request
export const load: LayoutServerLoad = async (event) => {

  console.log(event);

  // @ts-ignore

  const session = await event.locals.getSession();
  console.log(session)
  if (session === null) {
    console.log("damn");
    // throw redirect(307, '/auth');
  }
  return {
    session,
  };
};