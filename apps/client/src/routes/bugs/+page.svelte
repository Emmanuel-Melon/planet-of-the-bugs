<script lang="ts">
  import "iconify-icon";
  import { PageHeader } from "svelte-ui";
  import IssueRecommendationsList from "$components/Issues/IssueRecommendationsList.svelte";
  export let data: PageData;
</script>

<PageHeader
  heading="BugsHub"
  description="Enhance your coding skills by solving real-life issues from open-source
repositories"
/>

<section class="p-2">
  <div class="flex flex-col justify-center md:flex-row gap-2 w-4/5 mx-auto">
    <div class="grow">
      <div class="basis-3/5 lg:basis-4/5">
        <div
          class="flex justify-between items-center space-x-1 py-1 rounded-md"
        >
          <div class="flex gap-2 items-center">
            <h3 class="text-xl">Open Source Bugs</h3>
          </div>
          <div>
            <button class="btn btn-sm btn-square bg-rose-900">
              <iconify-icon icon="ri:arrow-left-double-line" />
            </button>
            <button class="btn btn-sm btn-square btn-outline">
              <iconify-icon icon="ri:arrow-right-double-line" />
            </button>
          </div>
        </div>
        {#if data}
          <IssueRecommendationsList issues={data.issues} />
        {:else}
          <p>Loading issues</p>
        {/if}
      </div>
    </div>
  </div>
</section>
