<script>
  import ChapterOverview from "./ChapterOverview.svelte";
  export let chapters;
  export let active;
  export let course;
</script>

<section>
  <div class="card card-compact bg-white shadow">
    <div class="card-body prose prose-sm">
      <div class="w-full">
        {#each chapters as chapter}
          <ChapterOverview {chapter} {course} />
        {/each}
      </div>
    </div>
  </div>
</section>
