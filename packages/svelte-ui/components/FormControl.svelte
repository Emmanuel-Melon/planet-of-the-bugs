<script lang="ts">
    export let ariaLabel;
    export let labelText;
</script>

<div class="form-control w-full">
  <label class="label" for={ariaLabel}>
    <span class="label-text text-neutral">{labelText}</span>
  </label>
  <slot />
</div>
