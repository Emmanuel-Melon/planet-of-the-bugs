<script>
    import RepoOverviewCard from "$components/Repositories/RepoOverviewCard.svelte";
    export let repositories;
  </script>
  
  <div class="flex gap-2 basis-4/5 flex-wrap">
    {#each repositories as edge}
      <RepoOverviewCard repo={edge?.node} />
    {/each}
  </div>
  