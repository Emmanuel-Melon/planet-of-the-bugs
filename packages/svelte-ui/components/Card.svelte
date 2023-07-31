<script lang="ts">
  export let bg: String = 'base-100';
  export let title: String = '';
  export let titleTag: String = 'h2';
  export let bodyVerticalSpacing: number = 2;
  export let height: 'full' | 'fit' = 'full';
</script>


<div class={`card cursor-pointer card-compact bg-${bg} w-full h-${height} shadow`}>
  <div class={`card-body space-y-${bodyVerticalSpacing}`}>
    {#if title}
      {@html `<${titleTag} class="card-title">${title}</${titleTag}>`}
    {/if}
    <slot />
  </div>
</div>
