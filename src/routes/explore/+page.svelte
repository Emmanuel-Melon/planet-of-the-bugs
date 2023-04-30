<script>
  export let data;
  import RepoOverviewCard from "$components/Repositories/RepoOverviewCard.svelte";
  import LessonCreator from "$components/Lessons/LessonCreator.svelte"
</script>

<h1>Explore The Planet</h1>

<div class="flex">
  <div class="flex-1">
    <h3>Suggested Repositories</h3>
    <div class="flex gap-2 flex-wrap">
      {#each data?.pullRequests?.edges as edge}
        <RepoOverviewCard repo={edge?.node} />
      {/each}
    </div>
  </div>

  <div class="flex-1">
    <h3>Latest Issues</h3>
    <div class="card bg-gray-100 shadow-md">
      <div class="card-body">
        <h3>Suggested Repositories</h3>

      </div>
    </div>
  </div>
</div>
