import { GITHUB_API } from "$lib/github/githubGraphQLClient";

export const load = async (event) => {

  const { parent } = event;

  const { session } = await parent();
  if (session?.token !== null || session?.token !== undefined) {
    GITHUB_API.setSession(session?.token?.accessToken);
    const githubClient = GITHUB_API.getGithubClient();
    return {
      session
    };
  }
};
