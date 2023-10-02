<script>
  import { onMount } from 'svelte';
  export let repositories;
  export let user;
  import 'iconify-icon';
  import ContributionsByRepo from './ContributionsByRepo.svelte';
  import { Card } from 'svelte-ui';

  function hexToHSL(hexColor) {
    // Remove the # if present
    hexColor = hexColor.replace('#', '');

    // Convert hex to RGB
    const r = parseInt(hexColor.substring(0, 2), 16) / 255;
    const g = parseInt(hexColor.substring(2, 4), 16) / 255;
    const b = parseInt(hexColor.substring(4, 6), 16) / 255;

    // Find the maximum and minimum values of RGB
    const cmax = Math.max(r, g, b);
    const cmin = Math.min(r, g, b);
    const delta = cmax - cmin;

    // Calculate hue
    let hue = 0;
    if (delta !== 0) {
      if (cmax === r) {
        hue = ((g - b) / delta) % 6;
      } else if (cmax === g) {
        hue = (b - r) / delta + 2;
      } else {
        hue = (r - g) / delta + 4;
      }
    }
    hue = Math.round(hue * 60);

    // Calculate lightness
    const lightness = (cmax + cmin) / 2;

    // Calculate saturation
    let saturation = 0;
    if (delta !== 0) {
      saturation = delta / (1 - Math.abs(2 * lightness - 1));
    }
    saturation = Math.round(saturation * 100);

    return `(${hue}, ${saturation}, ${lightness})`;
  }

  onMount(() => {
    return () => {};
  });
</script>

<section class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
  {#each repositories.nodes as node}
    <div class="basis-2/5 grow">
      <Card>
        <div class="space-y-2">
          <h3 class="card-title">
            {node.nameWithOwner}
          </h3>
          <div class="flex flex-wrap justify-start space-x-4">
            <div class="flex items-center justify-center space-x-1">
              <iconify-icon icon="ri:git-repository-line" />
              <a href={node.url} target="_blank" class="underline"
                >{node.name}</a
              >
            </div>
            {#if node.homepageUrl}
              <div class="flex items-center gap-1">
                <iconify-icon icon="ri:global-line" />
                <a href={node.homepageUrl} class="link opacity-50">Demo</a>
              </div>
            {/if}
            <div class="flex justify-center items-center space-x-1">
              <iconify-icon icon="ri:star-line" />
              <p>{node.stargazerCount}</p>
            </div>
            <div class="flex justify-center items-center space-x-1">
              <iconify-icon icon="ri:git-branch-line" />
              <p>{node.forkCount}</p>
            </div>
          </div>
        </div>
        <p>{node?.description}</p>
        <!-- <slot>
          <ContributionsByRepo repository={node} {user} />
        </slot> -->
        <div class="flex flex-wrap items-end space-x-2">
          {#each node.languages.nodes as language}
            <span class="w-fit px-2 py-1 bg-base-100/50 rounded-full"
              >{language.name}</span
            >
          {/each}
        </div>
      </Card>
    </div>
  {/each}
</section>
