<script>
  export let pinnedItems;
  import { Card } from "svelte-ui";
  import "iconify-icon";
</script>

<section>
  <div class="flex justify-between items-center mb-2">
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
  </div>
  <div class="flex gap-2 flex-wrap">
    {#each pinnedItems.nodes as pinnedItem}
      <div class="basis-2/5 grow max-h-min">
        <Card>
          <div class="flex justify-between items-center">
            <h2 class="card-title">{pinnedItem.name}</h2>
            <div class="badge badge-lg badge-accent gap-2">
              <iconify-icon icon="ri:star-line" />
              {pinnedItem.stargazerCount}
            </div>
          </div>
          <p class="">{pinnedItem.description}</p>
        </Card>
      </div>
    {/each}
  </div>
</section>
