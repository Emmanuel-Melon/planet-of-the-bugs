import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
  let session =  await event.locals.getSession()

  return {
    session,
  };
};