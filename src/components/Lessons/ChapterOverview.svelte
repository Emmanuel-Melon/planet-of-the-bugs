<script>
  /**
   * @type {{ title: any; description: any; }}
   */
  export let chapter;
</script>

<div class="my-2">
    <div class="flex justify-between items-center">
        <h3 class="prose lg:prose-xl">{chapter.title}</h3>
        <progress class="progress progress-secondary w-56" value="38" max="100"></progress>
    </div>
  <p>{chapter.description}</p>
</div>
