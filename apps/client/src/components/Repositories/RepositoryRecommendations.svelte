<script>
  import RepoOverviewCard from "$components/Repositories/RepoOverviewCard.svelte";
  export let repositories;
  export let user;

  console.log(user);
</script>

<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 basis-4/5">
  {#each repositories as edge}
    <RepoOverviewCard repo={edge?.node} {user} />
  {/each}
</div>
