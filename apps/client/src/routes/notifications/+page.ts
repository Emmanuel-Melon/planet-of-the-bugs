import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load = (async (event) => {
  const { parent, fetch, depends, data: pageData } = event;

  const { session } = await parent();

  if (session === null) {
    throw redirect(307, "/auth");
  }
}) satisfies LayoutServerLoad;
