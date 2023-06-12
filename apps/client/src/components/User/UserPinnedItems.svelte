<script>
  export let pinnedItems;
  import "iconify-icon";
</script>

<section>
  <div class="flex justify-between items-center mb-2">
    <h3 class="text-xl flex items-center gap-2">
      <iconify-icon icon="heroicons:bookmark-20-solid" /> Pinned Items ({pinnedItems.totalCount})
    </h3>

    <div>
      <button class="btn btn-sm btn-circle btn-secondary">
        <iconify-icon icon="heroicons:arrow-left-circle-20-solid" />
      </button>
      <button class="btn btn-sm btn-circle btn-outline">
        <iconify-icon icon="heroicons:arrow-right-circle-20-solid" />
      </button>
    </div>
  </div>
  <div class="flex gap-2 flex-wrap">
    {#each pinnedItems.nodes as pinnedItem}
      <div class="card card-compact basis-2/5 grow bg-white max-h-min shadow">
        <div class="card-body space-y-2">
          <div class="flex justify-between items-center">
            <h2 class="card-title">{pinnedItem.name}</h2>
            <div class="badge badge-lg badge-accent gap-2">
              <iconify-icon icon="heroicons:star" />
              {pinnedItem.stargazerCount}
            </div>
          </div>
          <p class="">{pinnedItem.description}</p>
        </div>
      </div>
    {/each}
  </div>
</section>
