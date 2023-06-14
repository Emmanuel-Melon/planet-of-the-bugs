<script>
  import RepoOverviewCard from '$components/Repositories/RepoOverviewCard.svelte';
  export let repositories;
  export let user;

  console.log(user);
</script>

<div class=" basis-4/5">
  <div class="flex justify-between items-center px-2 py-1 bg-base-200 rounded-md">
    <h3>Recommended Repositories</h3>
    <div class="flex justify-end space-x-1 mb-1 pr-2">
      <button class="btn btn-sm btn-circle btn-outline"
        ><iconify-icon icon="ri:equalizer-line" /></button
      >
      <button class="btn btn-sm btn-circle btn-outline">
        <iconify-icon icon="ri:information-line" /></button
      >
    </div>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
    {#each repositories as edge}
      <RepoOverviewCard repo={edge?.node} {user} />
    {/each}
  </div>
</div>
