<script>
import ManageReposTopicsModal from '$components/Modals/ManageReposTopicsModal.svelte';
import RepoOverviewCard from '$components/Repositories/RepoOverviewCard.svelte';
  export let repositories;
  export let user;
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
      <ManageReposTopicsModal />
    </div>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
    {#each repositories as edge}
      <RepoOverviewCard repo={edge?.node} {user} />
    {/each}
  </div>
</div>
