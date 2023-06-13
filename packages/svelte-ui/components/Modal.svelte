<script lang="ts">
  import "iconify-icon";
  export let heading;
  export let CTA;
  export let icon;
</script>

<!-- The button to open modal -->
<label for="custom-modal" class="btn btn-sm btn-outline gap-2"
  ><iconify-icon {icon} />{CTA}</label
>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="custom-modal" class="modal-toggle" />
<div class="modal">
  <div
    class="modal-box cursor-pointer relative space-y-2"
  >
    <div class="flex items-center justify-between">
      <h3 class="text-xl text-bold">{heading}</h3>
      <label
      id="close"
      for="custom-modal"
      class="modal-backdrop btn btn-sm btn-circle btn-ghost"
      ><iconify-icon icon="ri:close-line" /></label
    >
    </div>
    <slot />
  </div>

</div>
