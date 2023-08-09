// routes/login/github/callback/+server.ts
import { auth, githubAuth } from '$lib/auth/lucia.js';
import { OAuthRequestError } from '@lucia-auth/oauth';

export const GET = async ({ url, cookies, locals }) => {
  const storedState = cookies.get('github_oauth_state');
  const state = url.searchParams.get('state');
  const code = url.searchParams.get('code');
  // validate state
  console.log('Starting...:');
  if (!storedState || !state || storedState !== state || !code) {
    return new Response(null, {
      status: 400,
    });
  }
  try {
    console.log('validating...');

    const { existingUser, githubUser, createUser } =
      await githubAuth.validateCallback(code);

    const getUser = async () => {
      console.log('getting user:');

      if (existingUser) return existingUser;
      const user = await createUser({
        attributes: {
          username: 'newuser',
          email: githubUser.email || '',
          hasConnectedGithub: true,
          githubUsername: githubUser.login,
          name: githubUser.name || '',
          avatar: githubUser.avatar_url,
        },
      });
      console.log('got user:');
      console.log(user);

      return user;
    };
    console.log('auth error:');

    const user = await getUser();
    console.log('creating session:');

    const session = await auth.createSession({
      userId: user.userId,
      attributes: {},
    });
    console.log('got session:');
    console.log(session);

    locals.auth.setSession(session);
    return new Response(null, {
      status: 302,
      headers: {
        Location: '/',
      },
    });
  } catch (e) {
    if (e instanceof OAuthRequestError) {
      // invalid code
      console.log('auth error:');
      console.log(e.message);
      return new Response(null, {
        status: 400,
      });
    }
    console.log('Error:');
    console.log(e);
    return new Response(null, {
      status: 500,
    });
  }
};
