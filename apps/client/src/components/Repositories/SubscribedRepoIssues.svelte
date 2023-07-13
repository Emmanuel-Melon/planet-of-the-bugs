<script>
  export let issues;
  import { Card, Tabs } from "svelte-ui";
  import dayjs from "dayjs";
  import "iconify-icon";
</script>

<div class="flex justify-between items-center">
  <h3 class="text-xl">Recommended Issues</h3>
  <div class="flex gap-2">
    <button class="btn btn-sm btn-square btn-outline"
      ><iconify-icon icon="ri:arrow-left-double-line" /></button
    >
    <button class="btn btn-sm btn-square btn-outline"
      ><iconify-icon icon="ri:arrow-right-double-line" /></button
    >
  </div>
</div>
<div class="space-y-2">
  {#each issues as issue}
    <Card height="fit">
      <h3 class="card-title">{issue.node?.title}</h3>
      <p>#8434 Opened {`${dayjs(issue.node?.createdAt, "MM-DD")}`}</p>
      <p>{issue.node?.bodyText}</p>
      <div class="flex gap-2">
        {#each issue.node?.labels?.nodes as label}
          <div class={`badge bg-[#${label.color}]`}>{label?.name}</div>
        {/each}
      </div>
    </Card>
  {/each}
</div>
