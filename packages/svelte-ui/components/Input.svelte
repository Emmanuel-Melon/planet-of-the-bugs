<script lang="ts">
  export let type = 'text';
  export let name = '';
  export let placeholder = 'Type here';
  export let id = '';
  export let value = '';
  export let classes = '';
  export let size = 'sm';
  export let disabled = false;
  export let isReadonly = false;
  export let isTextArea = false;
  export let fileAccept: string = '';
</script>

{#if isTextArea}
  <textarea
    {...{ type }}
    {placeholder}
    class={`input input-${size} input-bordered w-full ${classes}`}
    {id}
    {name}
    bind:value
    {disabled}
    readonly={isReadonly}
  />
{:else}
  <input
    {...{ type }}
    {placeholder}
    class={`input input-${size} input-bordered w-full ${classes}`}
    {id}
    {name}
    bind:value
    {disabled}
    readonly={isReadonly}
    accept={fileAccept}
  />
{/if}
