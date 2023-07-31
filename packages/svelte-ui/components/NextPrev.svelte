<script>
  export let next = null;
  export let prev = null;
  export let slug;
  import 'iconify-icon';

  $: next, prev, slug;
</script>

<div class="flex flex-col md:flex-row gap-4 md:gap-0 justify-between w-full">
  {#if prev}
    <a
      href={`/courses/${slug}/${prev.id}`}
      class="btn btn-sm btn-outline gap-2 normal-case"
      ><iconify-icon icon="ri:arrow-left-circle-line" /> Previous: {prev.title}</a
    >
  {/if}

  {#if next}
    <a
      href={`/courses/${slug}/${next.id}`}
      class="btn btn-sm btn-outline btn-accent gap-2 normal-case"
      >Next: {next.title}<iconify-icon icon="ri:arrow-right-circle-line" /></a
    >
  {/if}
</div>
