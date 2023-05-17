<script>
  import RepoOverviewCard from "$components/Repositories/RepoOverviewCard.svelte";
  export let repositories;
  export let user;
  import "iconify-icon";

  console.log(repositories.nodes[0]);
</script>

<div class="flex gap-2 basis-4/5 flex-wrap">
  {#each repositories.nodes as repo}
    <div class="card basis-2/5 grow bg-white shadow-lg">
      <div class="card-body">
        <div class="flex items-center justify-between">
          <h3 class="card-title">{repo.name}</h3>
          <div class="flex items-center justify-center gap-2">
            <div class="badge badge-accent badge-md flex gap-2 items-center"><iconify-icon icon="heroicons:star" /> 98</div>
            <div class="badge badge-accent badge-md flex gap-2 items-center"><iconify-icon icon="iconoir:git-fork" /> 7</div>
          </div>
        </div>
        <p>{repo.description || "This repo has no description available."}</p>
        <div class="card-actions">
          <a
            href={repo.url}
            class="btn btn-sm btn-secondary link link-hover flex gap-2 items-center"
          >
            <iconify-icon icon="heroicons:code-bracket-square" />
            Source Code</a
          >
          <a
            href={repo.homepageUrl}
            class="btn btn-sm btn-primary link link-hover flex gap-2 items-center"
          >
            <iconify-icon icon="heroicons:globe-europe-africa-solid" />
            Project Demo</a
          >
        </div>
      </div>
    </div>
  {/each}
</div>
