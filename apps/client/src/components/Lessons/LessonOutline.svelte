<script>
  import ChapterOverview from "../Chapters/ChapterOverview.svelte";
  export let chapters;
  export let active;
  export let course;
</script>

<section>
  <div class="card card-compact bg-white shadow">
    <div class="card-body">
      <div class="w-full space-y-4">
        {#each chapters as chapter}
          <ChapterOverview {chapter} {course} />
        {/each}
      </div>
    </div>
  </div>
</section>
