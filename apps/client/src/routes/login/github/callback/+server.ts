// routes/login/github/callback/+server.ts
import { auth, githubAuth } from "$lib/server/lucia.js";
import { OAuthRequestError } from "@lucia-auth/oauth";

export const GET = async ({ url, cookies, locals }) => {
  const storedState = cookies.get("github_oauth_state");
  const state = url.searchParams.get("state");
  const code = url.searchParams.get("code");

  // validate state
  if (!storedState || !state || storedState !== state || !code) {
    return new Response(null, {
      status: 400,
    });
  }
  try {
    const { existingUser, githubUser, createUser } =
      await githubAuth.validateCallback(code);
    const getUser = async () => {
      if (existingUser) return existingUser;
      const user = await createUser({
        attributes: {
          github_username: githubUser?.github_username,
        },
      });
      return user;
    };
    const user = await getUser();
    const session = await auth.createSession({
      userId: user.userId,
      attributes: {},
    });
    locals.auth.setSession(session);

    return new Response(null, {
      status: 302,
      headers: {
        Location: existingUser ? "/" : "/new-user",
      },
    });
  } catch (e) {
    if (e instanceof OAuthRequestError) {
      // invalid code
      console.log("auth error:");
      console.log(e.message);
      return new Response(null, {
        status: 400,
      });
    }
    console.log("Error:");
    console.log(e);
    return new Response(null, {
      status: 500,
    });
  }
};
