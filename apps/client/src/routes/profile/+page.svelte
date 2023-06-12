<script>
  export let data;
  import UserGithubStats from "$components/User/UserGithubStats.svelte";
  import UserProfileCard from "$components/User/UserProfileCard.svelte";
  import RepositoriesContributedTo from "$components/User/RepositoriesContributedTo.svelte";
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import Tabs from "$components/ProfileTabs.svelte";
  import OwnedRepositories from "$components/Repositories/OwnedRepositories.svelte";
  import SubscribedRepositories from "$components/Repositories/SubscribedRepositories.svelte";
  import UserPinnedItems from "$components/User/UserPinnedItems.svelte";
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
        repositories: data.repositories,
      },
      icon: "ri:git-repository-line",
    },
    {
      label: "Contributed To",
      value: 2,
      component: RepositoriesContributedTo,
      props: {
        repositories: data.contributedTo,
        user: data.user.viewer,
      },
      icon: "ri:git-pull-request-fill",
    },
    {
      label: "Subscribed Repositories",
      value: 3,
      component: SubscribedRepositories,
      props: {
        repositories: data.contributedTo,
        user: data.user.viewer,
      },
      icon: "ri:base-station-line",
    },
    {
      label: "Pinned Items",
      value: 4,
      component: UserPinnedItems,
      props: {
        pinnedItems: data.pinnedItems,
      },
      icon: "ri:pushpin-2-line",
    },
  ];
</script>

<section class="w-full p-4">
  <div class="flex flex-col lg:flex-row gap-2">
    <div class="lg:w-1/3">
      <UserProfileCard
        user={data.user.viewer || {}}
        image={data.session?.user?.image || {}}
      />
    </div>
    <div class="lg:w-2/3 space-y-2">
      <UserGithubStats user={data.user.viewer} />
      <div class="gap-y-3">
        <Tabs {items} />
      </div>
    </div>
  </div>
</section>
