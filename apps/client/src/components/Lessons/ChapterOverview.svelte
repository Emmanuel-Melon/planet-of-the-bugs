<script>
  /**
   * @type {{ title: any; description: any; }}
   */
  export let chapter;
</script>

<div class="my-2 bg-white">
    <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 mb-4 justify-between items-center">
        <h3 class="">{chapter.title}</h3>
        <progress class="progress progress-secondary w-56" value="38" max="100"></progress>
    </div>
  <p>{chapter.description}</p>
  <div class="mt-4">
    {#each chapter.lessons as lesson}
      <div class="flex py-2 items-center gap-2">
        <span class="bg-black rounded-full px-1 text-white">
          <iconify-icon icon="heroicons:document-text" />
        </span>
        <a class="link" href={`/courses/introduction_to_debugging/${lesson.id}`}
          >{lesson.title}</a
        >
      </div>
    {/each}
  </div>
</div>
