<script lang="ts">
  export let inputType = "text";
  export let name = "";
  export let placeholder = "";
  export let id = "";
</script>

<input
  type={inputType}
  {placeholder}
  class="input input-sm bg-white input-bordered w-full"
  {id}
  {name}
/>
