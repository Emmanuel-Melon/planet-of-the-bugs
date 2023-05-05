import type { LayoutServerLoad } from './$types';

// add headers dynamically for every request
export const load: LayoutServerLoad = async (event) => {
  return {
    session: await event.locals.getSession(),
  };
};