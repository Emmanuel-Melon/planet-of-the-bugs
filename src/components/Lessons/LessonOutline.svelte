<script>
// @ts-nocheck

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
        <div>
          {#each lessons as lesson}
            <div class="flex py-2 items-center gap-2">
              <span class="bg-black rounded-full px-1 text-white">
                <iconify-icon icon="heroicons:document-text" />
              </span>
              <a class="link" href={`/courses/introduction-to-debugging/${lesson.id}`}
                >{lesson.title}</a
              >
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>
