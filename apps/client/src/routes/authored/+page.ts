import { GET_USER_BY_EMAIL } from "$lib/graphql/queries/user";
import apolloClient from "$lib/graphql/apolloClient";
import { destructureQueryResults } from "$lib/graphql/helpers";
import { redirectUnAuthenticatedUsers } from "$lib/auth/helpers";

export const load = async (event) => {
  const { parent, data: pageData } = event;

  const { session } = await parent();

  redirectUnAuthenticatedUsers(session, [307, "/auth"]);
  let githubProfileData = null;

  // const isTokenValid = validateGitHubAccessToken(session?.expires);

  // if (!isTokenValid) {
  //   refreshGitHubAccessToken(session);
  // }

  const user = await apolloClient.query({
    query: GET_USER_BY_EMAIL,
    variables: {
      email: session?.user?.email,
    },
  });

  const {
    data: { user: destructuredUserObject, loading: profileLoading },
  } = user;

  const userInfo = destructuredUserObject[0];

  return {
    user: { ...userInfo, profileLoading },
  };
};
