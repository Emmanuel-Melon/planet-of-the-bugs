<script lang="ts">
  export let hasImage: Boolean = false;
  export let bg: String = 'base-200';
  export let title: String = '';
  export let titleTag: String = 'h2';
  export let bodyVerticalSpacing: number = 2;
</script>


<div class={`card card-compact bg-${bg} w-full shadow-md`}>
  <div class={`card-body space-y-${bodyVerticalSpacing}`}>
    {#if title}
      {@html `<${titleTag} class="card-title">${title}</${titleTag}>`}
    {/if}
    <slot />
  </div>
</div>
