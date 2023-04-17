<script>
  import ChapterOverview from "./ChapterOverview.svelte";
  import "iconify-icon";
  export let chapters;


</script>

<section class=" my-4">
  <div class="gap-2">
    {#each chapters as chapter}
      <div
        class="border border-#efefef p-2 rounded-sm card bg-base-100 shadow-md"
      >
        <ChapterOverview {chapter} />

      </div>
    {/each}
  </div>
</section>
