import { dev } from "$app/environment";
import { githubAuth } from "$lib/server/lucia.js";

export const GET = async ({ cookies }): Promise<Response> => {
  const [url, state] = await githubAuth.getAuthorizationUrl();
  // store state
  cookies.set("github_oauth_state", state, {
    httpOnly: true,
    secure: !dev,
    path: "/",
    maxAge: 60 * 60,
  });
  return new Response(null, {
    status: 302,
    headers: {
      Location: url.toString(),
    },
  });
};
