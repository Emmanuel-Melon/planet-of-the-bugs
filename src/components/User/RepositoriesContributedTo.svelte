<script>
  import { onMount } from "svelte";
  export let repositories;
  export let user;
  import "iconify-icon";
  import ContributionsByRepo from "./ContributionsByRepo.svelte";
  import { githubClient } from "$lib/apollo";
  let contributions;

  function hexToHSL(hexColor) {
    // Remove the # if present
    hexColor = hexColor.replace("#", "");

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

<section class="flex gap-2 flex-wrap mt-2 grow w-full ">
  {#each repositories.nodes as node}
    <div class="card basis-1/4 grow bg-gray-100 shadow-lg border-solid border-e border-accent">
      <div class="card-body">
        <div class="flex gap-4">
          <div class="w-full">
            <div class="flex justify-between w-ful mb-2">
              <h3 class="card-title">
                <a class="link" href={node.url}>
                  {`${node.nameWithOwner}`}
                </a>
              </h3>
              <a class="link flex items-center gap-2" href={node.homepageUrl}>
                <iconify-icon icon="heroicons:globe-alt-solid" />
                Website</a
              >
            </div>
            <p>{node?.description}</p>
          </div>
        </div>
        <slot>
          <ContributionsByRepo repository={node} {user} />
        </slot>
        <h3>Tech Stack</h3>
        <div class="flex gap-2 flex-wrap">
          {#each node.languages.nodes as language}
            <div class={`badge badge-outline badge-lg gap-2`}>
              <iconify-icon icon="heroicons:code-bracket-square-20-solid" />
              {language.name}
            </div>
          {/each}
        </div>
      </div>
    </div>
  {/each}
</section>
