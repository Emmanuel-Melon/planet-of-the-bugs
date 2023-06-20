<script>
  export let repo;
  export let user;
  import "iconify-icon";

  console.log(repo?.owner?.avatarUrl);

  import { SUBSCRIBE_TO_REPO } from "$lib/graphql/mutations/repositories";
  import { mutation } from "svelte-apollo";
  const subscribeToRepo = mutation(SUBSCRIBE_TO_REPO);
  import ManageRepoSubscription from "./ManageRepoSubscription.svelte";
  import Button from "svelte-ui/components/Button.svelte";

  async function handleSubscribeToRepo() {
    try {
      const result = await subscribeToRepo({
        variables: {
          user_id: user?.id,
          repo_name: repo?.name,
          repo_owner: repo?.owner?.login,
          repo_url: repo?.url,
        },
      });
    } catch (error) {
      console.log(error);
      // TODO
    }
  }
</script>

<div class="card card-compact basis-2/5 grow bg-white shadow">
  <div class="card-body space-y-2">
    <div class="flex flex-col items-start space-y-2">
      <div class="flex items-center justify-between w-full">
        <div class="flex items-center gap-4">
          <div class="avatar">
            <div
              class="w-12 rounded-full ring ring-offset-base-900 ring-offset-2"
            >
              <img src={repo?.owner?.avatarUrl} alt="repo" />
            </div>
          </div>
          <a href={`repositories/${repo.id}`} class="hover:underline">
            <h2 class="card-title">
              {repo?.name}
            </h2>
          </a>
        </div>
        <ManageRepoSubscription />
      </div>
      <div class="flex space-x-8">
        <div class="flex items-center justify-center space-x-1">
          <iconify-icon icon="ri:git-repository-line" />
          <a href={repo.url} target="_blank" class="underline">{repo.name}</a>
        </div>
        <div class="flex justify-center items-center space-x-1">
          <iconify-icon icon="ri:star-line" />
          <p>{repo.stargazerCount.toLocaleString()}</p>
        </div>
        <div class="flex justify-center items-center space-x-1">
          <iconify-icon icon="ri:git-branch-line" />
          <p>{repo.forkCount.toLocaleString()}</p>
        </div>
      </div>
    </div>
    <p>{repo.description}</p>
    <div class="divider">Subscribe</div>
    <p>Never miss an update from your favorite GitHub repositories</p>
    <div class="card-actions justify-end">
      <div class="flex gap-2 items-center">
        <Button
          CTA="Skip"
          onClick={() => {}}
          icon="ri:close-circle-line"
          bg="ghost"
        />
        <Button
          CTA="Subscribe"
          onClick={handleSubscribeToRepo}
          icon="ri:heart-add-line"
        />
      </div>
    </div>
  </div>
</div>
