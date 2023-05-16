<script>
  export let repo;
  export let user;
  import "iconify-icon";

  import { SUBSCRIBE_TO_REPO } from "$lib/mutations/repositories";
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

      /**
       *       if (result.data.insert_user_subscribed_repos.affected_rows === 1) {
        console.log("Mutation successful!");
        //  Change the URL to the Svelte page
        window.location.href = `/courses/${slug}`;
      } else {
        console.log("Mutation failed");
      }
      */
    } catch (error) {
      console.log(error);
      // TODO
    }
  }
</script>

<div
  class="card basis-2/5 grow bg-white shadow-lg border-solid border border-accent"
>
  <div class="card-body">
    <div class="flex gap-4 items-center">
      <div class="flex gap-2">
        <h3 class="card-title">{repo.name.toLocaleUpperCase()}</h3>
        <a class="link link-secondary" href={repo.url}>{repo.name}</a>
      </div>
      <div>
        <div class="badge badge-primary gap-2">
          <iconify-icon icon="heroicons:star" />
          {repo.stargazerCount.toLocaleString()}
        </div>
      </div>
    </div>

    <p>{repo.description}</p>
    <div class="card-actions">
      <div class="bg-base-10 flex gap-2 p-1 items-center">
        <p>Never miss an update from your favorite GitHub repositories</p>
        <button
          on:click={handleSubscrbeToRepo}
          class="btn btn-sm btn-accent gap-2"
        >
          Watch Repo!
          <iconify-icon icon="heroicons:eye" />
        </button>
      </div>
    </div>
  </div>
</div>
