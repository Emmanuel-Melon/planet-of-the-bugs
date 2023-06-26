<script>
  export let CTA = "Filter By";
  export let criteria = [];
  export let icon = "ri:star-line";
  import "iconify-icon";
  import { Card } from "svelte-ui";
  export let filter = false;
</script>

<Card title={CTA}>
  {#each criteria as criterion}
    <div class="form-control">
      <label class="cursor-pointer label">
        <span class="flex items-center gap-2 label-text"
          ><iconify-icon icon={criterion.icon || icon} />
          {criterion.title}</span
        >
        <input type="checkbox" class="checkbox checkbox-sm" />
      </label>
    </div>
  {/each}
  <div class="card-actions justify-end">
    {#if filter}
      <button class="btn btn-sm btn-ghost">Clear</button>
    {/if}
  </div>
</Card>
