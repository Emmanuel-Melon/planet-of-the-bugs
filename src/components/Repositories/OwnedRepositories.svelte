<script>
    import RepoOverviewCard from "$components/Repositories/RepoOverviewCard.svelte";
    export let repositories;
    export let user;

    console.log(repositories.nodes[0]);
  </script>
  
  <div class="flex gap-2 basis-4/5 flex-wrap">
    {#each repositories.nodes as repo}
    <div
  class="card basis-2/5 grow bg-white shadow-lg border-solid border-e border-accent"
>
  <div class="card-body">
    <h3 class="card-title">{repo.name}</h3>
    <p>{repo.description || "This repo has no description available."}</p>
    </div>

    </div>


    {/each}
  </div>
  