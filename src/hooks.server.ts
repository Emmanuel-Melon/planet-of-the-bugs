import { SvelteKitAuth } from "@auth/sveltekit";
import GitHub from "@auth/core/providers/github";
import { PRIVATE_AUTH_SECRET, PRIVATE_GITHUB_ID, PRIVATE_GITHUB_SECRET } from "$env/static/private"

export const handle = SvelteKitAuth({
  providers: [
    GitHub({
      clientId: PRIVATE_GITHUB_ID,
      clientSecret: PRIVATE_GITHUB_SECRET,
    }),
  ],
  secret: PRIVATE_AUTH_SECRET,
});
