<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  export let data;
  import UserGithubStats from "$components/User/UserGithubStats.svelte";
  import UserProfileCard from "$components/User/UserProfileCard.svelte";
  import RepositoriesContributedTo from "$components/User/RepositoriesContributedTo.svelte";
  import Tabs from "$components/ProfileTabs.svelte";
  import OwnedRepositories from "$components/Repositories/OwnedRepositories.svelte";
  import SubscribedRepositories from "$components/Repositories/SubscribedRepositories.svelte";
  import UserPinnedItems from "$components/User/UserPinnedItems.svelte";
  let {
    contributedTo,
    currentUser,
    pinnedItems,
    repositories,
    subscribedTo,
    user,
  } = data;

  import { loggedInUserStore } from "./store";

  let activeUser;
  const unsubscribe = loggedInUserStore.subscribe((value) => {
    activeUser = value;
  });

  const setLoggedInUser = (user: any) => {
    loggedInUserStore.set(user);
  };
  const items = [
    {
      label: "Repositories",
      value: 1,
      component: OwnedRepositories,
      props: {
        repositories: repositories,
      },
      icon: "ri:git-repository-line",
    },
    {
      label: "Contributed To",
      value: 2,
      component: RepositoriesContributedTo,
      props: {
        repositories: contributedTo,
        user: data.user.viewer,
      },
      icon: "ri:git-pull-request-fill",
    },
    {
      label: "Subscribed Repositories",
      value: 3,
      component: SubscribedRepositories,
      props: {
        repositories: subscribedTo,
        user: data.user.viewer,
      },
      icon: "ri:base-station-line",
    },
    {
      label: "Pinned Items",
      value: 4,
      component: UserPinnedItems,
      props: {
        pinnedItems: pinnedItems,
      },
      icon: "ri:pushpin-2-line",
    },
  ];

  onMount(() => {
    if (currentUser !== null || currentUser !== undefined) {
      setLoggedInUser({ name: "user", ...currentUser, ...user.viewer });
    }
  });

  onDestroy(unsubscribe);
</script>

<div class="flex flex-col lg:flex-row gap-2">
  <div class="lg:w-1/3">
    <UserProfileCard
      user={{ ...activeUser }}
      image={data.session?.user?.image || {}}
    />
  </div>
  <div class="lg:w-2/3 space-y-2">
    <UserGithubStats user={user.viewer} />
    <div class="gap-y-3">
      <Tabs {items} />
    </div>
  </div>
</div>
