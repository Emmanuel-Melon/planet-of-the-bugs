import type { LayoutServerLoad, PageLoad } from './$types';
export const load: LayoutServerLoad = async (event) => {
  try {
    const session = await event.locals.getSession();
    return {
      session
    };
  } catch (err) {
    console.log(err);
  }
};