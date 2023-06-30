import { redirectUnAuthenticatedUsers } from "$lib/auth/helpers";
import { GITHUB_API } from "$lib/graphql/apolloClient";
import { GET_REPO_WITH_LATEST_ISSUES } from "$lib/graphql/queries/repositories.js";

export const load = async (event) => {
  const { params, parent, data: pageData } = event;

  const { owner, repoName } = params;

  const { session } = await parent();

  redirectUnAuthenticatedUsers(session, [307, "/auth"]);

  GITHUB_API.setSession(session?.token?.accessToken);

  const githubClient = GITHUB_API.getGithubClient();

  const { data } = await githubClient.query({
    query: GET_REPO_WITH_LATEST_ISSUES,
    variables: {
      owner: owner,
      repoName: repoName,
      issueCount: 10,
    },
  });

  return {
    repo: data.repository,
  };
};
