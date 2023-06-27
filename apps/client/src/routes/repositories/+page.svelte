<script lang="ts">
  export let data;
  import { page } from "$app/stores";
  import { onMount, onDestroy } from "svelte";
  import { PageHeader } from "svelte-ui";

  import LessonCreator from "$components/Lessons/LessonCreator.svelte";
  import ContributionsStats from "$components/User/ContributionsStats.svelte";
  import SidebarFilter from "$components/SidebarFilter.svelte";
  import RepositoryRecommendations from "$components/Repositories/RepositoryRecommendations.svelte";
  let user;

  onMount(() => {
    user = $page.data.session?.user;
  });

  const criteria = [
    {
      id: 1,
      title: "By Stars",
      icon: "",
    },
    {
      id: 2,
      title: "By Open Issues",
      icon: "material-symbols:lock-open",
    },
    {
      id: 3,
      title: "By Pull Requests",
      icon: "ph:git-pull-request-duotone",
    },
  ];

  const updateUserTopics = (topics: string[]) => {
    
  }
</script>

<PageHeader description="Take your newly learned skills to the next level by practicing on
real-world issues from Github? By subscribing to a Github repo, you
can receive issues with labels that match your interests such as
language, bug, good-first-issue, or even bounty." heading="Practice makes perfect!" />

<section class="p-2">
  <div class="flex flex-col lg:flex-row gap-2">
    <div class="grow">
      <SidebarFilter CTA="Filter Repositories" {criteria} />
    </div>
    <RepositoryRecommendations
      repositories={data.repositories?.data?.edges}
      user={data?.user}
    />
  </div>
</section>