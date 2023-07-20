<script lang="ts">
  export let repo;
  export let user;
  import "iconify-icon";
  import { Card, Button } from "svelte-ui";
  import {
    SUBSCRIBE_TO_REPO,
    UNSUBSCRIBE_FROM_REPO,
  } from "$lib/graphql/mutations/repositories";
  import { mutation } from "svelte-apollo";
  import ManageRepoSubscription from "./ManageRepoSubscription.svelte";

  const subscribeToRepo = mutation(SUBSCRIBE_TO_REPO);
  const unsubscribeFromRepo = mutation(UNSUBSCRIBE_FROM_REPO);

  let isSubscribed: Boolean = user?.subscribedRepos.some(
    (item) => item.repo_name === repo?.name
  );

  async function handleUnsubscribeFromRepo() {
    buttons[0].requestState = 'processing';
    try {
      const result = await unsubscribeFromRepo({
        variables: {
          user_id: user?.id,
          repo_name: repo?.name,
          repo_owner: repo?.owner?.login,
        },
      });
      isSubscribed = false;
      buttons[0].requestState = 'completed';
    } catch (error) {
      console.log(error);
      buttons[0].requestState = 'failed';

      // TODO
    }
  }

  async function handleSubscribeToRepo() {
    buttons[1].requestState = 'processing';

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
      buttons[1].requestState = 'completed';
    } catch (error) {
      buttons[1].requestState = 'failed';
      console.log(error);
      // TODO
    }
  }

  let buttons: ButtonProps[] = [
    {
      CTA: 'Unsubscribe',
      icon: 'ri:delete-bin-7-line',
      requestState: 'idle',
      onClick: handleUnsubscribeFromRepo,
    },
    {
      CTA: 'Subscribe',
      icon: 'ri:heart-add-line',
      requestState: 'idle',
      onClick: handleSubscribeToRepo,
    },
    {
      CTA: 'Skip',
      icon: 'ri:close-line',
      requestState: 'idle',
      onClick: () => {},
    },
  ];

  $: buttons;
</script>

<div class="basis-2/5 grow">
  <Card>    <div class="flex gap-2">
    <div class="badge badge-outline gap-2">
      <iconify-icon icon="ri:git-repository-line" />
      <a href={repo?.url} target="_blank" class="link link-hover">GitHub</a>
    </div>
    <div class="badge badge-outline gap-2">
      
      <iconify-icon icon="ri:star-line" />
      <p>{repo?.stargazerCount.toLocaleString()}</p>
    </div>
    <div class="badge badge-outline gap-2">
      <iconify-icon icon="ri:git-branch-line" />
      <p>{repo?.forkCount.toLocaleString()}</p>
    </div>
  </div>

    <div class="flex flex-col items-start">
      <div class="flex items-center justify-between w-full">
        <div class="flex items-center gap-2">
          <div class="avatar">
            <div class="w-10 rounded-md shadow">
              <img src={repo?.owner?.avatarUrl} alt="repo" />
            </div>
          </div>
          <a
            href={`repositories/${repo?.owner?.login}/${repo?.name}`}
            class="hover:underline"
          >
            <h2 class="card-title">
              {repo?.name}
            </h2>
          </a>
        </div>

        {#if isSubscribed}
        <ManageRepoSubscription />
        {/if}
      </div>

    </div>

    <p>{repo?.description}</p>


    <div class="card-actions items-center justify-start gap-2">
      <Button
      CTA="Subscribe"
      onClick={handleSubscribeToRepo}
      icon="ri:heart-add-line"
    />
    <Button CTA="Skip" onClick={() => {}} icon="ri:close-line" bg="ghost" />
    </div>
  </Card>
</div>
