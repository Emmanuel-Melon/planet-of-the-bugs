<script lang="ts">
  export let hasImage: Boolean = false;
  export let bg: String = 'base-100';
  export let title: String = '';
  export let titleTag: String = 'h2';
  export let bodyVerticalSpacing: number = 2;
  export let height: String = 'full';
  export let img: string;
</script>


<div class={`card card-compact bg-${bg} w-full h-${height} shadow`}>
  {#if img}
    <figure><img src={img} alt="Card" /></figure>
  {/if}
  <div class={`card-body space-y-${bodyVerticalSpacing}`}>
    {#if title}
      {@html `<${titleTag} class="card-title">${title}</${titleTag}>`}
    {/if}
    <slot />
  </div>
</div>
