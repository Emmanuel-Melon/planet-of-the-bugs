<script lang="ts">
  import { mutation } from 'svelte-apollo';
  import { UPDATE_USER_TOPICS } from '$lib/graphql/mutations/users';
  import ManageReposTopicsModal from '$components/Modals/ManageReposTopicsModal.svelte';
  import RepoOverviewCard from '$components/Repositories/RepoOverviewCard.svelte';
  export let repositories: [];
  export let user: any;
  export let topics: [];
  const update = mutation(UPDATE_USER_TOPICS);

  const updateUserTopics = async (event) => {
    requestState = 'processing';
    try {
      const result = await update({
        variables: {
          userTopics: JSON.stringify(event.detail.userTopics),
          uid: user?.id,
        },
      });
      requestState = 'completed';
      console.log('User Topics updated!');
      location.reload();
    } catch (error) {
      requestState = 'completed';
      console.log(error);
    }
  };

  let requestState: 'idle' | 'processing' | 'completed' | 'failed' = 'idle';

  $: requestState;
</script>

<div class="basis-4/5">
  <div class="flex justify-between items-center px-2 py-1 rounded-md">
    <div class="flex gap-2 items-center">
      <button class="btn btn-sm btn-square btn-outline">
        <iconify-icon icon="ri:information-line" /></button
      >
      <h3 class="text-xl">Recommended Repositories</h3>
    </div>
    <div class="flex justify-end">
      <ManageReposTopicsModal
        {topics}
        {user}
        {requestState}
        on:buttonClick={updateUserTopics}
      />
    </div>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
    {#each repositories as edge}
      <RepoOverviewCard repo={edge?.node} {user} />
    {:else}
      <p>No repos</p>
    {/each}
  </div>
</div>
