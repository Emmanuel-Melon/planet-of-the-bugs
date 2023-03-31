<script>
// @ts-nocheck

  
  export let chapter;
</script>

<div class="my-2">
    <div class="flex justify-between items-center">
        <h3 class="prose lg:prose-xl">{chapter.title}</h3>
        <progress class="progress progress-secondary w-56" value="38" max="100"></progress>
    </div>
  <p>{chapter.description}</p>

  <div>
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
