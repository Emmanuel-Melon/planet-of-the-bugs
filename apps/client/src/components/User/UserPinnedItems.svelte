<script>
  export let pinnedItems;
  import { Card } from 'svelte-ui';
  import 'iconify-icon';
</script>

<section>
  <!-- <div class="flex justify-between items-center mb-2">
    <h3 class="text-xl flex items-center gap-2">
      <iconify-icon icon="ri:pushpin-2-line" /> Pinned Items ({pinnedItems.totalCount})
    </h3>

    <div>
      <button class="btn btn-sm btn-square btn-secondary">
        <iconify-icon icon="ri:arrow-left-double-line" />
      </button>
      <button class="btn btn-sm btn-square btn-outline">
        <iconify-icon icon="ri:arrow-right-double-line" />
      </button>
    </div>
  </div> -->
  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
    {#each pinnedItems.nodes as pinnedItem}
      <Card>
        <h3 class="card-title">{pinnedItem.name}</h3>
        <div class="flex items-center justify-between">
          <div class="flex items-center justify-around gap-1 md:gap-4">
            <div class="flex items-center gap-1">
              <iconify-icon icon="ri:git-repository-line" />
              <a href={pinnedItem.url} class="link">{pinnedItem.name}</a>
            </div>
            {#if pinnedItem.homepageUrl}
              <div class="flex items-center gap-1">
                <iconify-icon icon="ri:global-line" />
                <a href={pinnedItem.homepageUrl} class="link opacity-50">Demo</a
                >
              </div>
            {/if}
            <div class="flex items-center gap-1">
              <iconify-icon icon="ri:star-s-line" />
              <p>{pinnedItem.stargazerCount}</p>
            </div>
            <div class="flex items-center gap-1">
              <iconify-icon icon="ri:git-branch-line" />
              <p>{pinnedItem.forks.totalCount}</p>
            </div>
          </div>
        </div>
        <div class="divider">Description</div>
        <p>
          {pinnedItem.description || 'This repo has no description available.'}
        </p>
        <div class="flex flex-wrap items-end space-x-2">
          {#each pinnedItem.languages.nodes as language}
            <span class="w-fit px-2 py-1 bg-base-100/50 rounded-full"
              >{language.name}</span
            >
          {/each}
        </div>
      </Card>
    {/each}
  </div>
</section>
