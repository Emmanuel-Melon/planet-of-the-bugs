<script lang="ts">
  export let repo;
  export let user;
  import 'iconify-icon';
  import { Card, Button } from 'svelte-ui';
  import {
    SUBSCRIBE_TO_REPO,
    UNSUBSCRIBE_FROM_REPO,
  } from '$lib/graphql/mutations/repositories';
  import { mutation } from 'svelte-apollo';
  import ManageRepoSubscription from './ManageRepoSubscription.svelte';

  const subscribeToRepo = mutation(SUBSCRIBE_TO_REPO);
  const unsubscribeFromRepo = mutation(UNSUBSCRIBE_FROM_REPO);

  let isSubscribed: Boolean = user?.subscribedRepos.some(
    (item) => item.repo_name === repo?.name
  );

  async function handleUnsubscribeFromRepo() {
    buttons[0].isProcessing = true;
    try {
      const result = await unsubscribeFromRepo({
        variables: {
          user_id: user?.id,
          repo_name: repo?.name,
          repo_owner: repo?.owner?.login,
        },
      });
      isSubscribed = false;
      buttons[0].isProcessing = false;
    } catch (error) {
      console.log(error);
      buttons[0].isProcessing = false;

      // TODO
    }
  }

  async function handleSubscribeToRepo() {
    buttons[1].isProcessing = true;

    try {
      const result = await subscribeToRepo({
        variables: {
          user_id: user?.id,
          repo_name: repo?.name,
          repo_owner: repo?.owner?.login,
          repo_url: repo?.url,
        },
      });
      isSubscribed = true;
      buttons[1].isProcessing = false;
    } catch (error) {
      buttons[1].isProcessing = false;
      console.log(error);
      // TODO
    }
  }

  $: buttons = [
    {
      CTA: 'Unsubscribe',
      icon: 'ri:delete-bin-7-line',
      isProcessing: false,
      onClick: handleUnsubscribeFromRepo,
    },
    {
      CTA: 'Subscribe',
      icon: 'ri:heart-add-line',
      isProcessing: false,
      onClick: handleSubscribeToRepo,
    },
    {
      CTA: 'Skip',
      icon: 'ri:close-line',
      isProcessing: false,
      onClick: () => {},
    },
  ];
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
          href={`repositories/${repo?.owner?.login}/${repo?.name}`}
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
          <a href={repo?.url} target="_blank" class="underline">{repo?.name}</a>
        </div>
        <div class="flex justify-center items-center space-x-1">
          <iconify-icon icon="ri:star-line" />
          <p>{repo?.stargazerCount.toLocaleString()}</p>
        </div>
        <div class="flex justify-center items-center space-x-1">
          <iconify-icon icon="ri:git-branch-line" />
          <p>{repo?.forkCount.toLocaleString()}</p>
        </div>
      </div>
    </div>

    <p>{repo?.description}</p>

    {#if isSubscribed}
      <div class="divider">Manage</div>
      <p class="text-neutral">
        Manage issues from your favorite GitHub repositories
      </p>
    {:else}
      <div class="divider">Subscribe</div>
      <p class="text-neutral">
        Never miss an update from your favorite GitHub repositories
      </p>
    {/if}
    <div class="card-actions items-center justify-start gap-2">
      {#if isSubscribed}
        <a
          class="btn btn-primary btn-sm gap-2"
          href={`repositories/${repo?.owner.login}/${repo?.name}`}
        >
          <iconify-icon icon="ri:settings-3-line" />

          Manage</a
        >
        <Button
          CTA={buttons[0].CTA}
          icon={buttons[0].icon}
          isProcessing={buttons[0].isProcessing}
          on:buttonClick={buttons[0].onClick}
          type="ghost"
        />
      {:else}
        <Button
          CTA={buttons[1].CTA}
          icon={buttons[1].icon}
          isProcessing={buttons[1].isProcessing}
          on:buttonClick={buttons[1].onClick}
        />

        <Button
          CTA={buttons[2].CTA}
          icon={buttons[2].icon}
          on:buttonClick={buttons[2].onClick}
          type="ghost"
        />
      {/if}
    </div>
  </Card>
</div>
