<script lang="ts">
  export let ariaLabel: string;
  export let labelText: string;
  export let isHidden: boolean = false;
  export let classes: string = '';
</script>

<div class={`form-control w-full ${isHidden && 'hidden'} ${classes}`}>
  <label class="label" for={ariaLabel}>
    <span class="label-text text-neutral">{labelText}</span>
  </label>
  <slot />
</div>
