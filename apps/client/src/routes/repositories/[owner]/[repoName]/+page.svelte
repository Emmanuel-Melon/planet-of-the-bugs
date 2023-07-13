<script lang="ts">
  import { onDestroy } from "svelte";
  export let data;
  import { subscribedRepos } from "../../subscribedRepos";
  import { Card, Tabs } from "svelte-ui";
  import dayjs from "dayjs";
  import "iconify-icon";
  import SubscribedRepoIssues from "$components/Repositories/SubscribedRepoIssues.svelte";

  const { repo } = data;

  const items = [
    {
      label: "Issues 96",
      value: 1,
      icon: "ri:git-repository-line",
      props: {
        issues: repo?.issues?.edges,
      },
      component: SubscribedRepoIssues,
    },
    {
      label: "Pull Requests 89",
      value: 2,
      icon: "ri:git-pull-request-fill",
      props: {
        issues: repo?.issues?.edges,
      },
      component: SubscribedRepoIssues,
    },
    {
      label: "Reviews 190",
      value: 3,
      icon: "ri:discuss-line",
      props: {
        issues: repo?.issues?.edges,
      },
      component: SubscribedRepoIssues,
    },
    {
      label: "Contributors 10",
      value: 4,
      icon: "ri:group-line",
      props: {
        issues: repo?.issues?.edges,
      },
      component: SubscribedRepoIssues,
    },
  ];
</script>

<div class="bg-base-200 p-4 space-y-2">
  <button class="btn btn-sm btn-outline">Back</button>
  <div class="text-sm breadcrumbs">
    <ul>
      <li><a>Owner</a></li>
      <li><a>Repositories</a></li>
      <li>{repo?.name}</li>
    </ul>
  </div>
  <h1 class="text-2xl">{repo?.name}</h1>
  <p>{repo?.description}</p>
  <div class="flex flex-wrap gap-2">
    <div class="badge badge-outline gap-2">
      <iconify-icon icon="ri:star-line" /> 54
    </div>
    <div class="badge badge-outline gap-2">
      <iconify-icon icon="ri:star-line" /> 43
    </div>
  </div>
</div>
<section class="flex flex-col lg:flex-row gap-4 p-2">
  <div class="basis-2/5 space-y-2">
    <div class="flex justify-between items-center">
      <h3 class="text-xl">My Labels</h3>
      <button class="btn btn-sm btn-square btn-ghost"
        ><iconify-icon icon="ri:equalizer-line" /></button
      >
    </div>
    <div class="flex flex-wrap gap-2">
      <div class="badge badge-outline">default</div>
      <div class="badge badge-primary badge-outline">primary</div>
      <div class="badge badge-secondary badge-outline">secondary</div>
      <div class="badge badge-accent badge-outline">accent</div>
    </div>
  </div>
  <div>
    <Tabs {items} />
  </div>
</section>
