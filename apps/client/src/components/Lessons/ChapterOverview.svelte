<script>
  /**
   * @type {{ title: any; description: any; }}
   */
  export let chapter;
  export let course;
  import "iconify-icon";
</script>

<div class="w-full">
  <div
    class="w-full flex flex-col md:flex-row md:space-y-0 justify-between items-center"
  >
    <div>
      <h3 class="flex items-center gap-2 text-primary"><iconify-icon icon="ri:award-line" /> {chapter.title}</h3>
      <p>{chapter.description}</p>
    </div>

  </div>
  <div class="space-y-2">
    {#each chapter.lessons as lesson}
      <div class="flex items-center gap-2">
        <span class="flex items-center bg-accent text-white p-2 rounded-full shodow-md">
          <iconify-icon icon="ri:booklet-line" />
        </span>
        <a class="link link-hover" href={`/courses/${course.slug}/${lesson.id}`}
          >{lesson.title}</a
        >
      </div>
    {/each}
  </div>
</div>
