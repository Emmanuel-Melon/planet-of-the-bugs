import {
  gql,
  // @ts-ignore
} from "@apollo/client/core/core.cjs";

export const SUBSCRIBE_TO_REPO = gql`
  mutation subscribeToRepo(
    $repo_name: String
    $repo_owner: String
    $repo_url: String
    $user_id: uuid
  ) {
    insert_user_subscribed_repos_one(
      object: {
        repo_name: $repo_name
        repo_owner: $repo_owner
        repo_url: $repo_url
        user_id: $user_id
      }
    ) {
      repo_name
      repo_owner
      id
    }
  }
`;

// https://github.com/login/oauth/authorize?client_id=YOUR_CLIENT_ID&scope=user:email,repo,public_repo&redirect_uri=YOUR_REDIRECT_URI

export const CREATE_REPO_WEBHOOK = gql`
  mutation CreateWebhook {
    createRepositoryWebhook(
      input: {
        repositoryId: "REPOSITORY_ID"
        name: "web"
        active: true
        events: [ISSUES, PULL_REQUESTS]
        config: {
          url: "WEBHOOK_URL"
          content_type: "json"
          secret: "WEBHOOK_SECRET"
        }
      }
    ) {
      clientMutationId
    }
  }
`;
