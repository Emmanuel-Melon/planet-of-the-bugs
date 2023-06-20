<script>
  /**
   * @type {{ title: any; description: any; }}
   */
  export let chapter;
  export let course;
  import "iconify-icon";
</script>

<div class="w-full space-y-4">
  <div
    class="w-full flex flex-col md:flex-row justify-between items-center space-y-4"
  >
    <div class="space-y-4">
      <h3 class="text-xl text-primary">{chapter.title}</h3>
      <p>{chapter.description}</p>
    </div>

  </div>
  <div class="space-y-2">
    {#each chapter.lessons as lesson}
      <div class="flex items-center gap-2">
        <span class="flex items-center p-2 rounded-full bg-neutral shadow text-neutral-content">
          <iconify-icon icon="ri:booklet-line" />
        </span>
        <a class="link link-hover" href={`/courses/${course.slug}/${lesson.id}`}
          >{lesson.title}</a
        >
      </div>
    {/each}
  </div>
</div>
