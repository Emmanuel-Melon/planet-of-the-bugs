<script>
  export let data;
  import UserGithubStats from '$components/User/UserGithubStats.svelte';
  import UserProfileCard from '$components/User/UserProfileCard.svelte';
  import RepositoriesContributedTo from '$components/User/RepositoriesContributedTo.svelte';
  import { onMount, onDestroy } from 'svelte';
  import Tabs from 'svelte-ui/components/Tabs.svelte';
  import OwnedRepositories from '$components/Repositories/OwnedRepositories.svelte';
  import SubscribedRepositories from '$components/Repositories/SubscribedRepositories.svelte';
  import UserPinnedItems from '$components/User/UserPinnedItems.svelte';
  import ProfileOverview from '$components/User/ProfileOverview.svelte';
  import { page } from '$app/stores';


  let user;

  onMount(() => {
    user = $page?.data?.session?.user;
  });

  onDestroy(() => {
    user = null;
  });

  const items = [
    {
      label: 'Repositories',
      value: 1,
      component: OwnedRepositories,
      props: {
        repositories: data.user.repositories,
      },
      icon: 'ri:git-repository-line',
    },
    {
      label: 'Contributed To',
      value: 2,
      component: RepositoriesContributedTo,
      props: {
        repositories: data.user.contributedTo,
        user: data.user.viewer,
      },
      icon: 'ri:git-pull-request-fill',
    },
    {
      label: 'Subscribed Repositories',
      value: 3,
      component: SubscribedRepositories,
      props: {
        repositories: data.user.contributedTo,
        user: data.user,
      },
      icon: 'ri:base-station-line',
    },
    {
      label: 'Pinned Items',
      value: 4,
      component: UserPinnedItems,
      props: {
        pinnedItems: data.user.pinnedItems,
      },
      icon: 'ri:pushpin-2-line',
    },
    {
      label: 'About User',
      value: 5,
      component: ProfileOverview,
      props: {
        pinnedItems: data.user.pinnedItems,
      },
      icon: 'ri:information-line',
    },
  ];
</script>

<section class="w-full">
  <div class="flex flex-col lg:flex-row gap-2">
    <div class="lg:w-1/3">
      <UserProfileCard
        user={data.user || {}}
        image={data.session?.user?.image || {}}
        isCurrentUser={data.user.isCurrentUser}
      />
    </div>
    <div class="lg:w-2/3">
      <UserGithubStats user={data.user} />
      <div class="gap-y-3">
        <Tabs {items} />
      </div>
    </div>
  </div>
</section>
