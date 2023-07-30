<script lang="ts">
  import { goto } from '$app/navigation';
  import { mutation } from 'svelte-apollo';
  import { UPDATE_USER_TOPICS } from '$lib/graphql/mutations/users';
  import ManageReposTopicsModal from '$components/Modals/ManageReposTopicsModal.svelte';
  import RepoOverviewCard from '$components/Repositories/RepoOverviewCard.svelte';
  // import type { RequestState } from 'svelte-ui/Types';
  export let repositories: [];
  export let user: any;
  export let topics: [];
  const update = mutation(UPDATE_USER_TOPICS);

  const updateUserTopics = async (event) => {
    requestState = 'processing';
    try {
      const result = await update({
        variables: {
          userTopics: JSON.stringify(event.detail),
          uid: user?.id,
        },
      });
      requestState = 'completed';
      console.log('User Topics updated!');
      goto(location.href, { replaceState: true, noScroll: true });
    } catch (error) {
      requestState = 'completed';
      console.log(error);
    }
  };

  let requestState = 'idle';

  $: requestState;
</script>

<div class="basis-4/5 space-y-2">
  <div class="flex justify-between items-center rounded-md">
    <div class="flex gap-2 items-center">
      <button class="btn btn-sm btn-outline">Preferences</button>
    </div>
    <div class="flex justify-start">
      <ManageReposTopicsModal
        {topics}
        {user}
        {requestState}
        on:buttonClick={updateUserTopics}
      />
    </div>
  </div>
  <div

    class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-2"
  >
    {#each repositories as edge}
      <RepoOverviewCard repo={edge?.node} {user} />
    {:else}
      <p>No repos</p>
    {/each}
  </div>
</div>
