<script>
  import RepoOverviewCard from "$components/Repositories/RepoOverviewCard.svelte";
  export let repositories;
  export let user;

  // console.log(user);
</script>

<div class="flex gap-2 basis-4/5 flex-wrap">
  {#each repositories as edge}
    <RepoOverviewCard repo={edge?.node} {user} />
  {/each}
</div>
