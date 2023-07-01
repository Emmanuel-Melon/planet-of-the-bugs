<script>
  import ChapterOverview from "../Chapters/ChapterOverview.svelte";
  export let chapters;
  export let active;
  export let course;
  import { Card } from "svelte-ui";
</script>

<section>
  <Card>
    <div class="w-full space-y-2">
      {#each chapters as chapter}
        <ChapterOverview {chapter} {course} />
      {/each}
    </div>
  </Card>
</section>
