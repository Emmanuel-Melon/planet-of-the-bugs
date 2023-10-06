<script lang="ts">
  export let data;
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import toast, { Toaster } from "svelte-french-toast";
  import { PageHeader, Tabs } from "svelte-ui";
  import RepositoryRecommendations from "$components/Repositories/RepositoryRecommendations.svelte";
  import SubscribedRepoInsights from "$components/Repositories/Subscribed/SubscribedRepoInsights.svelte";
  import SubscribedReposOverview from "$components/Repositories/Subscribed/SubscribedReposOverview.svelte";

  let { repositories, topics, user } = data;

  const items = [
    {
      id: 1,
      label: `${repositories?.data?.repositoryCount} Recommendations`,
      icon: "ri:git-repository-line",
      component: RepositoryRecommendations,
      value: 1,
      props: {
        repositories: repositories?.data?.edges,
        user,
        topics,
        repositoryCount: repositories?.data?.repositoryCount,
      },
    },
    {
      id: 2,
      label: "Subscribed",
      icon: "ri:heart-line",
      component: SubscribedReposOverview,
      value: 2,
      props: {
        name: "hello",
      },
    },
    {
      id: 3,
      label: "Insights",
      icon: "ri:bubble-chart-line",
      component: SubscribedRepoInsights,
      value: 3,
      props: {
        name: "hello",
      },
    },
  ];

  // subscribedRepos.set(user?.subscribedRepos)

  onMount(() => {
    if ($page.error) {
      toast.error($page.error.message, {
        position: "bottom-center",
      });
    }
  });
</script>

<PageHeader
  description="Take your newly learned skills to the next level by practicing on
real-world issues from Github? By subscribing to a Github repo, you
can receive issues with labels that match your interests such as
language, bug, good-first-issue, or even bounty."
  heading="Practice makes perfect!"
/>
<section class="p-2">
  <div class="flex flex-col lg:flex-row gap-2">
    <Tabs {items} />
  </div>
</section>
<Toaster />
