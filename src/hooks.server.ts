import { SvelteKitAuth } from "@auth/sveltekit";
import GitHub from "@auth/core/providers/github";
import Google from "@auth/core/providers/google";
import {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  PRIVATE_AUTH_SECRET,
  PRIVATE_GITHUB_ID,
  PRIVATE_GITHUB_SECRET,
} from "$env/static/private";

export const handle = SvelteKitAuth({
  providers: [
    GitHub({
      clientId: PRIVATE_GITHUB_ID,
      clientSecret: PRIVATE_GITHUB_SECRET,
    }),
    Google({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: PRIVATE_AUTH_SECRET,
  trustHost: true
});
