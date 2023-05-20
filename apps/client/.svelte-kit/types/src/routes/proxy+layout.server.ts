// @ts-nocheck
import type { LayoutServerLoad } from './$types';

export const load = async (event: Parameters<LayoutServerLoad>[0]) => {
  const session = await event.locals.getSession();

  return {
    session,
  };
};