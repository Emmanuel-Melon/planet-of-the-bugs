<script lang="ts">
  import { onDestroy } from 'svelte';
  export let data;
  import { subscribedRepos } from '../../subscribedRepos';
  import { Card, Tabs } from 'svelte-ui';
  import dayjs from 'dayjs';
  import 'iconify-icon';
  import SubscribedRepoIssues from '$components/Repositories/Subscribed/SubscribedRepoIssues.svelte';
  import ContributorsOverview from '$components/Repositories/ContributorsOverview.svelte';
  import PullRequestsOverview from '$components/Repositories/PullRequestsOverview.svelte';
  const { repo, issues, pullRequests } = data;
  // console.log(repo);

  const items = [
    {
      label: `Issues ${repo.issues.totalCount}`,
      value: 1,
      icon: 'ri:focus-line',
      component: SubscribedRepoIssues,
      props: {
        issues,
      },
    },
    {
      label: `Pull Requests ${repo.pullRequests.totalCount}`,
      value: 2,
      icon: 'ri:git-pull-request-line',
      component: PullRequestsOverview,
      props: {
        pullRequests,
      },
    },
    // {
    //   label: 'Contributors 3',
    //   value: 3,
    //   icon: 'ri:group-line',
    //   component: ContributorsOverview,
    //   props: {},
    // },
  ];
</script>

<div class="bg-rose-900 text-white p-4 space-y-2">
  <button class="btn btn-sm">Back</button>
  <div class="text-sm breadcrumbs">
    <ul>
      <li><a>{repo.owner.login}</a></li>
      <li><a>Repositories</a></li>
      <li>{repo?.name}</li>
    </ul>
  </div>
  <h1 class="text-2xl">{repo?.name}</h1>
  <p>{repo?.description}</p>
  <div class="flex flex-wrap gap-2">
    <div class="badge badge-outline gap-2">
      <iconify-icon icon="ri:git-pull-request-line" />
      {repo.pullRequests.totalCount} Pull Requests
    </div>
    <div class="badge badge-outline gap-2">
      <iconify-icon icon="ri:focus-line" />
      {repo.issues.totalCount} Issues
    </div>
    <div class="badge badge-outline gap-2">
      <iconify-icon icon="ri:git-repository-line" />
      {repo.forkCount} Forks
    </div>
    <div class="badge badge-outline gap-2">
      <iconify-icon icon="ri:star-line" />
      {repo.stargazerCount} Stargazers
    </div>
  </div>
</div>
<section class="p-2 flex flex-col md:flex-row gap-2">
  <div class="basis-2/5 space-y-2">
    <Card title={repo.owner.login}>
      <div class="flex gap-2">
        <a href="/"><iconify-icon icon="ri:global-line" /> Website</a>
        <a href={repo.url}
          ><iconify-icon icon="ri:git-repository-line" /> Next.js</a
        >
      </div>
      <h3 class="text-xl">Contributors</h3>
      <div class="avatar-group -space-x-6">
        <div class="avatar">
          <div class="w-12">
            <img src="https://avatars.githubusercontent.com/u/21015204?v=4" />
          </div>
        </div>
        <div class="avatar">
          <div class="w-12">
            <img src="https://avatars.githubusercontent.com/u/21015204?v=4" />
          </div>
        </div>
        <div class="avatar">
          <div class="w-12">
            <img src="https://avatars.githubusercontent.com/u/21015204?v=4" />
          </div>
        </div>
        <div class="avatar placeholder">
          <div class="w-12 bg-neutral-focus text-neutral-content">
            <span>+99</span>
          </div>
        </div>
      </div>
      <div class="flex justify-between items-center">
        <h3 class="text-xl">Topics</h3>
      </div>
      <div class="flex flex-wrap gap-2">
        <div class="badge badge-outline gap-2">
          <iconify-icon icon="logos:graphql" /> GraphQL
        </div>
        <div class="badge badge-primary badge-outline gap-2">
          <iconify-icon icon="logos:nextjs-icon" /> Next.js
        </div>
        <div class="badge badge-secondary badge-outline gap-2">
          <iconify-icon icon="logos:mongodb-icon" /> MongoDB
        </div>
        <div class="badge badge-accent badge-outline gap-2">
          <iconify-icon icon="logos:react" /> React
        </div>
        <div class="badge badge-accent badge-outline gap-2">
          <iconify-icon icon="logos:apollostack" /> Apollo
        </div>
      </div>
    </Card>
  </div>
  <div>
    <Tabs {items} {...items.props} />
  </div>
</section>
