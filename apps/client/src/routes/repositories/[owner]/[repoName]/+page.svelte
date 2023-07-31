<script lang="ts">
  import { onDestroy } from "svelte";
  export let data;
  import { subscribedRepos } from "../../subscribedRepos";
  import { Card, Tabs } from "svelte-ui";
  import dayjs from "dayjs";
  import "iconify-icon";
  import SubscribedRepoIssues from "$components/Repositories/Subscribed/SubscribedRepoIssues.svelte";
  import ContributorsOverview from "$components/Repositories/ContributorsOverview.svelte";
  import PullRequestsOverview from "$components/Repositories/PullRequestsOverview.svelte";
  const { repo } = data;

  const items = [
    {
      label: "Pull Requests 89",
      value: 1,
      icon: "ri:git-pull-request-line",
      component: PullRequestsOverview,
    },
    {
      label: "Issues 10",
      value: 2,
      icon: "ri:focus-line",
      component: SubscribedRepoIssues,
    },
    {
      label: "Contributors 3",
      value: 3,
      icon: "ri:group-line",
      component: ContributorsOverview,
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
      <iconify-icon icon="ri:git-pull-request-line" /> 54 Pull Requests
    </div>
    <div class="badge badge-outline gap-2">
      <iconify-icon icon="ri:focus-line" /> 43 Issues
    </div>
    <div class="badge badge-outline gap-2">
      <iconify-icon icon="ri:star-line" /> 43 Stargazers
    </div>
  </div>
</div>
<section class="p-2 flex gap-2">
  <div class="basis-2/5 space-y-2">
    <Card title="Repo Overview">
      <div class="flex justify-between items-center">
        <h3>Labels</h3>
      </div>
      <div class="flex flex-wrap gap-2">
        <div class="badge badge-outline">default</div>
        <div class="badge badge-primary badge-outline">primary</div>
        <div class="badge badge-secondary badge-outline">secondary</div>
        <div class="badge badge-accent badge-outline">accent</div>
      </div>
    </Card>
  </div>
  <div>
    <Tabs {items} />
  </div>
</section>
