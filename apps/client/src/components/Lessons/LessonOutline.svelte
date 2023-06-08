<script>
  import ChapterOverview from "./ChapterOverview.svelte";
  import "iconify-icon";
  export let chapters;


</script>

<section>
  <div class="gap-2 space-y-4">
    {#each chapters as chapter}
      <div
        class="border border-#efefef p-2 rounded-sm card bg-white shadow-md"
      >
        <ChapterOverview {chapter} />
      </div>
    {/each}
  </div>
</section>
