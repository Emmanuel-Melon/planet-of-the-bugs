<script lang="ts">
  export let data;
  import { PageHeader, Tabs } from 'svelte-ui';
  import autoAnimate from '@formkit/auto-animate';
  import SidebarFilter from '$components/SidebarFilter.svelte';
  import RepositoryRecommendations from '$components/Repositories/RepositoryRecommendations.svelte';
  import { subscribedRepos } from './subscribedRepos.js';
  // import SubscribedRepositories from '$components/Repositories/SubscribedRepositories.svelte';
  import SubscribedRepoInsights from '$components/Repositories/Subscribed/SubscribedRepoInsights.svelte';
  import SubscribedReposOverview from '$components/Repositories/Subscribed/SubscribedReposOverview.svelte';
  
  
  let { topics, user, repositories } = data;

  const criteria = [
    {
      id: 1,
      title: 'By Stars',
      icon: '',
      
    },
    {
      id: 2,
      title: 'By Open Issues',
      icon: 'material-symbols:lock-open',
    },
    {
      id: 3,
      title: 'By Pull Requests',
      icon: 'ph:git-pull-request-duotone',
    },
  ];

  const items = [
    {
      id: 1,
      label: 'Recommendations',
      icon: 'ri:git-repository-line',
      component: RepositoryRecommendations,
      value: 1,
      props: {
        repositories: repositories?.data?.edges,
        user,
        topics
      }
    },
    {
      id: 2,
      label: 'Subscribed',
      icon: 'ri:heart-line',
      component: SubscribedReposOverview,
      value: 2,
      props: {
        name: "hello"
      }
    },
    {
      id: 3,
      label: 'Insights',
      icon: 'ri:bubble-chart-line',
      component: SubscribedRepoInsights,
      value: 3,
      props: {
        name: "hello"
      }

    }
  ];
    
  subscribedRepos.set(user?.subscribedRepos)
</script>

<PageHeader
  description="Take your newly learned skills to the next level by practicing on
real-world issues from Github? By subscribing to a Github repo, you
can receive issues with labels that match your interests such as
language, bug, good-first-issue, or even bounty."
  heading="Practice makes perfect!"
/>

<section class="p-2">
  <div class="flex flex-col lg:flex-row gap-2 w-4/5 mx-auto">
    <Tabs {items} />
  </div>
</section>
