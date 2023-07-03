import type { ParamMatcher } from "@sveltejs/kit";

export const match = ((param) => {
  return /^[a-z0-9]+(?:[-][a-z0-9]+)*$/gm.test(param);
}) satisfies ParamMatcher;
