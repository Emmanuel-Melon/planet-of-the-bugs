<script lang="ts">
  import { onDestroy } from "svelte";
  export let data;
  import { subscribedRepos } from "../../subscribedRepos";
  import { Card, Tabs } from "svelte-ui";
  import dayjs from "dayjs";
  import "iconify-icon";

  const { repo } = data;

  const items = [
    {
      label: "Issues",
      value: 1,
      icon: "ri:git-repository-line",
    },
    {
      label: "Pull Requests",
      value: 2,
      icon: "ri:git-pull-request-fill",
    },
    {
      label: "Reviews",
      value: 3,
      icon: "ri:git-pull-request-fill",
    }
  ];
</script>

<section class="flex flex-col lg:flex-row gap-4 p-4">
  <div>
    <h3>{repo?.name}</h3>
    <p>{repo?.description}</p>
  </div>
  <div class="space-y-2">
    <Tabs {items} />
    <div class="flex justify-between">
      <h3>Recommended Issues</h3>
      <div class="flex gap-2">
        <button class="btn btn-sm btn-square btn-ghost"
        ><iconify-icon icon="ri:bookmark-line" height="25" width="25" /></button
      >
      <button class="btn btn-sm btn-square btn-ghost"
      ><iconify-icon icon="ri:bookmark-line" height="25" width="25" /></button
    >
      </div>
    </div>
    {#each repo?.issues?.edges as issue}
      <Card title={issue.node?.title} height="fit">
        <p>{`${dayjs(issue.node?.createdAt, "MM-DD-YYYY")}`}</p>
      
        <p>{issue.node?.bodyText}</p>
        <div class="flex gap-2">
          {#each issue.node?.labels?.nodes as label}
            <div class={`badge bg-[#${label.color}]`}>{label?.name}</div>
          {/each}
        </div>
      </Card>
    {/each}
  </div>
</section>
