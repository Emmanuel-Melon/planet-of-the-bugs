<script>
  import ChapterOverview from "../Chapters/ChapterOverview.svelte";
  export let chapters;
  export let course;
</script>

<div class="w-full space-y-2">
  {#each chapters as chapter}
    <ChapterOverview {chapter} {course} />
  {/each}
</div>
