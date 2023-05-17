<script>
  export let data;
  import UserGithubStats from "$components/User/UserGithubStats.svelte";
  import UserProfileCard from "$components/User/UserProfileCard.svelte";
  import RepositoriesContributedTo from "$components/User/RepositoriesContributedTo.svelte";
  import PaginationComponent from "$components/PaginationComponent.svelte";
  import { page } from "$app/stores";
  import { onMount, onDestroy } from "svelte";
  import ContributionsByRepo from "$components/User/ContributionsByRepo.svelte";
  import Tabs from "$components/Tabs.svelte";
  import OwnedRepositories from "$components/Repositories/OwnedRepositories.svelte";
  import SubscrbedRepositories from "$components/Repositories/SubscrbedRepositories.svelte";
  import UserPinnedItems from "$components/User/UserPinnedItems.svelte";
  import ProfileOverview from "$components/User/ProfileOverview.svelte";
  let user;

  onMount(() => {
    user = $page.data.session?.user;
  });

  const items = [
    {
      label: "Repositories",
      value: 1,
      component: OwnedRepositories,
      props: {
        repositories: data.repositories
      },
      icon: "codicon:repo"
    },
    {
      label: "Contributed To",
      value: 2,
      component: RepositoriesContributedTo,
      props: {
        repositories: data.contributedTo,
        user: data.user.viewer,
      },
      icon: "octicon:git-pull-request-16"
    },
    {
      label: "Subscribed Repositories",
      value: 3,
      component: SubscrbedRepositories,
      props: {
        repositories: data.contributedTo,
        user: data.user.viewer,
      },
      icon: "ant-design:save-filled"
    },
    {
      label: "Pinned Items",
      value: 4,
      component: UserPinnedItems,
      props: {
        pinnedItems: data.pinnedItems
      },
      icon: "fluent-mdl2:pinned-solid"
    },
    {
      label: "About",
      value: 5,
      component: ProfileOverview,
      props: {
        pinnedItems: data.pinnedItems
      },
      icon: "heroicons:user-20-solid"
    },
  ];
</script>

<svelte:head>
  <title>Profile</title>
  <meta name="description" content="Planet of the Bugs uses AI to generate fake bug scenarios for developers to learn debugging skills and the fundamentals of writing secure and robust software. By using AI, the app can provide an endless supply of unique scenarios, allowing developers to practice and hone their skills." />

</svelte:head>

<main class="w-full">
  <div class="flex gap-1">
    <div class="basis-1/4">
      <UserProfileCard
        user={data.user.viewer || {}}
        image={data.session?.user?.image || {}}
      />
    </div>
    <div class="basis-3/4">
      <UserGithubStats user={data.user.viewer} />
      <div class="gap-y-3">
        <Tabs {items} />
        <PaginationComponent />
      </div>
    </div>
  </div>
</main>
