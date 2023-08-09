import type { LayoutServerLoad, PageLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
  try {
    const session = await locals.auth.validate();
    console.log('session: ');
    console.log(session);
    return {
      session,
    };
  } catch (err) {
    console.log(err);
  }
};
