<script>
  export let data;
  import RepoOverviewCard from "$components/Repositories/RepoOverviewCard.svelte";
  import LessonCreator from "$components/Lessons/LessonCreator.svelte"
</script>

<h1>Explore The Planet</h1>

<div class="flex">
  <div class="flex-wrap">
    <h3>Suggested Repositories</h3>
    <div class="flex gap-2 flex-wrap">
      {#each data?.pullRequests?.edges as edge}
        <RepoOverviewCard repo={edge?.node} />
      {/each}
    </div>
  </div>

</div>
