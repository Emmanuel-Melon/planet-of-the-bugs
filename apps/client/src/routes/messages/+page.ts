import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load = (async (event) => {
  const { parent, fetch, depends, data: pageData } = event;
}) satisfies LayoutServerLoad;
