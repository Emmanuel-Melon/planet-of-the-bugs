<script lang="ts">
  export let inputType = "text";
  export let name = "";
  export let placeholder = "";
  export let id = "";
  export let value = "";
  export let classes = "";
</script>

<input
  type={inputType}
  {placeholder}
  class={`input input-sm bg-white input-bordered w-full ${classes}`}
  {id}
  {name}
  {value}
/>
