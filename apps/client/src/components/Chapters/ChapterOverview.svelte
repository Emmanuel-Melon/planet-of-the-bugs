<script>
  /**
   * @type {{ title: any; description: any; }}
   */
  export let chapter;
  export let course;
  import "iconify-icon";

  const icons = {
    interactive: "ri:code-line",
    Interactive: "ri:code-line",
    text: "ri:booklet-line",
    video: "ri:video-line",
    Video: "ri:video-line"
  }

  const mapLessonIcons = (type) => {
    return icons[type] || icons["text"];
  }
</script>

<div class="w-full space-y-4">
  <div
    class="w-full flex flex-col md:flex-row justify-between items-center space-y-4"
  >
    <div class="space-y-4">
      <h3 class="text-xl">{chapter.title}</h3>
      <p>{chapter.description}</p>
    </div>

  </div>
  <div class="space-y-2">
    {#each chapter.lessons as lesson}
      <div class="flex items-center gap-2">
        <span class="flex items-center bg-base-200 border-2 border-secondary p-2 rounded-full shodow-md">
          <iconify-icon icon={mapLessonIcons(lesson.type)} />
        </span>
        <a class="link link-hover" href={`/courses/${course.slug}/${lesson.id}`}
          >{lesson.title}</a
        >
      </div>
    {/each}
  </div>
</div>
