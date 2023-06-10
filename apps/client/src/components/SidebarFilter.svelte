<script>
    export let CTA = "Filter By";
    export let criteria = [];
    export let icon = "heroicons:star";
    import "iconify-icon";
    
</script>

<div
class="card p-4"
>
<div class="divider">{CTA}</div>
<div>
    {#each criteria as criterion}
    <div class="form-control">
        <label class="cursor-pointer label">
          <span class="flex items-center gap-2 label-text"><iconify-icon icon={criterion.icon || icon} /> {criterion.title}</span>
          <input
            type="checkbox"
            class="checkbox checkbox-md checkbox-primary"
          />
        </label>
      </div>
    {/each}
</div>
</div>