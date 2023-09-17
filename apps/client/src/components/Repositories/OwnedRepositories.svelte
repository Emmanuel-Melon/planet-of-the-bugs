<script>
  export let repositories;
  import 'iconify-icon';
  import { Card } from 'svelte-ui';
  console.log(repositories.nodes[0]);
</script>

<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
  {#each repositories.nodes as repo}
    <Card>
      <h3 class="card-title">{repo.name}</h3>
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-around gap-1 md:gap-4">
          <div class="flex items-center gap-1">
            <iconify-icon icon="ri:git-repository-line" />
            <a href={repo.url} class="link">{repo.name}</a>
          </div>
          {#if repo.homepageUrl}
            <div class="flex items-center gap-1">
              <iconify-icon icon="ri:global-line" />
              <a href={repo.homepageUrl} class="link opacity-50">Demo</a>
            </div>
          {/if}
          <div class="flex items-center gap-1">
            <iconify-icon icon="ri:star-s-line" />
            <p>{repo.stargazerCount}</p>
          </div>
          <div class="flex items-center gap-1">
            <iconify-icon icon="ri:git-branch-line" />
            <p>{repo.forkCount}</p>
          </div>
        </div>
      </div>
      <div class="divider">Description</div>
      <p>{repo.description || 'This repo has no description available.'}</p>
      <div class="flex flex-wrap items-end space-x-2">
        {#each repo.repositoryTopics.edges as { node: { topic } }}
          <span class="w-fit px-2 py-1 bg-base-100/50 rounded-full"
            >{topic.name}</span
          >
        {/each}
      </div>
    </Card>
  {/each}
</div>
