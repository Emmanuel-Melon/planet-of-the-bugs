<script lang="ts">
  import 'iconify-icon';
  export let heading: String;
  export let CTA: String;
  export let icon: String;
  export let id: String;
  export let btnBg: String = 'primary';
  export let isOutline: boolean = false;
</script>

<!-- The button to open modal -->
<label
  for={`${id}-modal`}
  class={isOutline
    ? `cursor-pointer`
    : `btn btn-sm btn-${btnBg} gap-2`}><iconify-icon {icon} />{CTA}</label
>

<!-- Put this part before </body> tag -->
<input type="checkbox" id={`${id}-modal`} class="modal-toggle" />
<div class="modal">
  <div class="modal-box cursor-pointer relative space-y-2">
    <div class="flex items-center justify-between">
      <h3 class="text-xl text-bold">{heading}</h3>
      <label
        id="close"
        for={`${id}-modal`}
        class="modal-backdrop btn btn-sm btn-circle btn-ghost"
        ><iconify-icon icon="ri:close-line" /></label
      >
    </div>
    <slot />
  </div>
</div>
