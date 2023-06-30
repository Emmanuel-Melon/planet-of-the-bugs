<script lang="ts">
  export let repo;
  export let user;
  import 'iconify-icon';
  import { Card, Button } from 'svelte-ui';
  import { SUBSCRIBE_TO_REPO } from '$lib/graphql/mutations/repositories';
  import { mutation } from 'svelte-apollo';
  const subscribeToRepo = mutation(SUBSCRIBE_TO_REPO);
  import ManageRepoSubscription from './ManageRepoSubscription.svelte';

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

  const isSubscribed: Boolean = user?.subscribedRepos.some(
    (item) => item.repo_name === repo.name
  );
</script>

<div class="basis-2/5 grow">
  <Card>
    <div class="avatar">
      <div
        class="w-12 rounded-full ring ring-offset-primary ring-offset-2 shadow"
      >
        <img src={repo?.owner?.avatarUrl} alt="repo" />
      </div>
    </div>
    <div class="flex flex-col items-start">
      <div class="flex items-center justify-between w-full">
        <a
          href={`repositories/${repo.owner.login}/${repo.name}`}
          class="hover:underline"
        >
          <h2 class="card-title">
            {repo?.name}
          </h2>
        </a>
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
    <p class="text-neutral">
      Never miss an update from your favorite GitHub repositories
    </p>
    <div class="card-actions items-center justify-start gap-2">
      {#if isSubscribed}
        <a
          class="btn btn-primary btn-sm gap-2"
          href={`repositories/${repo.owner.login}/${repo.name}`}
        >
          <iconify-icon icon="ri:settings-3-line" />
          Manage</a
        >
      {:else}
        <Button
          CTA="Subscribe"
          onClick={handleSubscribeToRepo}
          icon="ri:heart-add-line"
        />
      {/if}
      <Button CTA="Skip" onClick={() => {}} icon="ri:close-line" bg="ghost" />
    </div>
  </Card>
</div>
