<script lang="ts">
  import "iconify-icon";
  export let bg: string = "primary";
  export let size: string = "sm";
  export let onClick;
  export let CTA: string;
  export let icon: string;
</script>

<button class={`btn btn-${bg} btn-${size} gap-2`} on:click={onClick}>
  {#if icon}
    <iconify-icon {icon} />
  {/if}
  {CTA}
</button>
