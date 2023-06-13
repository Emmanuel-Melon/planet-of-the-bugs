<script>
  export let pinnedItems;
  import "iconify-icon";
</script>

<section>
  <div class="flex justify-between items-center mb-2">
    <h3 class="text-xl flex items-center gap-2">
      <iconify-icon icon="ri:pushpin-2-line" /> Pinned Items ({pinnedItems.totalCount})
    </h3>

    <div>
      <button class="btn btn-sm btn-circle btn-secondary">
        <iconify-icon icon="ri:arrow-left-double-line" />
      </button>
      <button class="btn btn-sm btn-circle btn-outline">
        <iconify-icon icon="ri:arrow-right-double-line" />
      </button>
    </div>
  </div>
  <div class="flex gap-2 flex-wrap">
    {#each pinnedItems.nodes as pinnedItem}
      <div class="card card-compact basis-2/5 grow bg-white max-h-min shadow">
        <div class="card-body space-y-2">
          <div class="flex justify-between items-center">
            <h2 class="card-title text-primary">{pinnedItem.name}</h2>
            <div class="badge badge-lg badge-accent gap-2">
              <iconify-icon icon="ri:star-line" />
              {pinnedItem.stargazerCount}
            </div>
          </div>
          <p class="">{pinnedItem.description}</p>
        </div>
      </div>
    {/each}
  </div>
</section>
