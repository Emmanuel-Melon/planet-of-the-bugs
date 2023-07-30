<script>
  export let repositories;
  import 'iconify-icon';
  import { Card } from 'svelte-ui';
</script>

<div class="flex gap-2 basis-4/5 flex-wrap">
  {#each repositories.nodes as repo}
    <div class="basis-2/5 grow">
      <Card>
        <div class="flex items-center justify-between">
          <h3 class="card-title">{repo.name}</h3>
          <div class="flex items-center justify-center gap-2">
            <div
              class="badge badge-lg py-2 badge-accent badge-outline flex gap-2 items-center"
            >
              <iconify-icon icon="ri:star-line" />
              {repo.stargazerCount}
            </div>
            <div
              class="badge badge-lg py-2 badge-accent badge-outline flex gap-2 items-center"
            >
              <iconify-icon icon="iconoir:git-fork" />{repo.forkCount}
            </div>
          </div>
        </div>
        <div class="divider">Description</div>
        <p>{repo.description || 'This repo has no description available.'}</p>
        <div class="card-actions justify-start">
          <a
            href={repo.url}
            class="btn btn-sm btn-outline link link-hover flex gap-2 items-center"
          >
            <iconify-icon icon="ri:github-line" />
            Source</a
          >
          <a
            href={repo.homepageUrl}
            class="btn btn-sm btn-primary link link-hover flex gap-2 items-center"
          >
            <iconify-icon icon="ri:link" />
            Live Demo</a
          >
        </div>
      </Card>
    </div>
  {/each}
</div>
