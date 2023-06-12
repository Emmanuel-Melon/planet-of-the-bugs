<script lang="ts">
  import "iconify-icon";
  export let title;
  export let CTA;
  export let icon;
</script>

<!-- The button to open modal -->
<label for="chapter-modal" class="btn btn-sm btn-primary gap-2"
  ><iconify-icon icon="ri:add-line" /> Chapter</label
>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="chapter-modal" class="modal-toggle" />
<div class="modal">
  <div class="modal-box cursor-pointer relative">
    <label
      id="close"
      for="chapter-modal"
      class="modal-backdrop btn btn-sm btn-circle btn-ghost absolute top-2 right-2"
      ><iconify-icon icon="ri:close-line" /></label
    >
    <slot />
  </div>
</div>
