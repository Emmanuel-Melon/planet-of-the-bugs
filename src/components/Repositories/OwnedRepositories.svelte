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
            <div class="badge badge-outline badge-primary badge-lg flex gap-2 items-center"><iconify-icon icon="heroicons:star" /> {repo.stargazerCount}</div>
            <div class="badge badge-outline badge-primary badge-lg flex gap-2 items-center"><iconify-icon icon="iconoir:git-fork" />{repo.forkCount
            }</div>
          </div>
        </div>
        <p>{repo.description || "This repo has no description available."}</p>
        <div class="card-actions">
          <a
            href={repo.url}
            class="btn btn-md btn-secondary link link-hover flex gap-2 items-center"
          >
            <iconify-icon icon="ri:github-line" />
            Source</a
          >
          <a
            href={repo.homepageUrl}
            class="btn btn-md btn-primary link link-hover flex gap-2 items-center"
          >
            <iconify-icon icon="ri:global-line" />
            Demo</a
          >
        </div>
      </div>
    </div>
  {/each}
</div>
