<script>
  export let repo;
  export let user;
  import "iconify-icon";

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
    <div class="flex flex-col items-start">
      <div class="flex items-center justify-between w-full">
        <h2 class="card-title">
          <a class="link link-hover" target="_blank" href={repo.url}
            >{repo.name.toLocaleUpperCase()}</a
          >
        </h2>
        <button class="rounded-full grid place-items-center"><iconify-icon icon="ri:close-line" /></button>
      </div>
      <div class="flex space-x-8">

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
        <ManageRepoSubscription />
        <Button CTA="Subscribe" onClick={handleSubscribeToRepo} icon="ri:heart-add-line"/>
      </div>
    </div>
  </div>
</div>
