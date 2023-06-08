import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from '../profile/$types';

export const load = (async (event) => {
  const session = await event.locals.getSession();
  if (session === null) {
    throw redirect(307, '/auth');
  }
}) satisfies LayoutServerLoad;
