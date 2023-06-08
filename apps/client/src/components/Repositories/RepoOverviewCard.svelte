<script>
  export let repo;
  export let user;
  import "iconify-icon";

  import { SUBSCRIBE_TO_REPO } from "$lib/graphql/mutations/repositories";
  import { mutation } from "svelte-apollo";
  const subscribeToRepo = mutation(SUBSCRIBE_TO_REPO);

  async function handleSubscrbeToRepo() {
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

<div class="card card-compact basis-2/5 grow bg-white shadow-md">
  <div class="card-body space-y-2">
    <div class="flex gap-4 items-center">
      <div class="flex items-center justify-between w-full">
        <h3 class="card-title">
          <a class="link link-hover" target="_blank" href={repo.url}
            >{repo.name.toLocaleUpperCase()}</a
          >
        </h3>
        <div class="badge badge-outline gap-2">
          <iconify-icon icon="heroicons:star" />
          {repo.stargazerCount.toLocaleString()}
        </div>
      </div>
    </div>
    <p>{repo.description}</p>
    <div class="divider">Subscribe</div>
    <p>Never miss an update from your favorite GitHub repositories</p>
    <div class="card-actions justify-end">
      <div class="bg-base-10 flex gap-2 p-1 items-center">
        <button
          on:click={handleSubscrbeToRepo}
          class="btn btn-sm btn-primary gap-2"
        >
          <iconify-icon icon="ri:eye-line" />
          Subscribe
        </button>
      </div>
    </div>
  </div>
</div>
