<script>
  /**
   * @type {{ title: any; description: any; }}
   */
  export let chapter;
</script>

<div class="my-2">
  <h3 class="prose lg:prose-xl">{chapter.title}</h3>
  <p>{chapter.description}</p>
</div>
