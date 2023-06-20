<script>
  import RepoOverviewCard from '$components/Repositories/RepoOverviewCard.svelte';
  export let repositories;
  export let user;
</script>

<div class="basis-4/5 space-y-2">
  <div class="flex justify-between items-center">
    <div class="flex gap-2 items-center">
      <button class="btn btn-sm btn-circle btn-outline">
        <iconify-icon icon="ri:information-line" /></button
      >
      <h3>Recommended Repositories</h3>
    </div>
    <div class="flex justify-end space-x-1 mb-1 pr-2">
      <button class="btn btn-sm btn-circle btn-outline"
        ><iconify-icon icon="ri:equalizer-line" /></button
      >
    </div>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
    {#each repositories as edge}
      <RepoOverviewCard repo={edge?.node} {user} />
    {/each}
  </div>
</div>
