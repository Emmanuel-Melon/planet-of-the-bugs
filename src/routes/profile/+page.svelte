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
  let user;

  onMount(() => {
    user = $page.data.session?.user;
  });

  const items = [
    {
      label: "Contributed To",
      value: 1,
      component: RepositoriesContributedTo,
      props: {
        repositories: data.contributedTo,
        user: data.user.viewer,
      },
      icon: "octicon:git-pull-request-16"
    },
    {
      label: "Owned Repositories",
      value: 2,
      component: RepositoriesContributedTo,
      props: {
        repositories: data.contributedTo,
        user: data.user.viewer,
      },
      icon: "codicon:repo"
    },
    {
      label: "Subscribed Repositories",
      value: 3,
      component: RepositoriesContributedTo,
      props: {
        repositories: data.contributedTo,
        user: data.user.viewer,
      },
      icon: "ant-design:save-filled"
    },
    {
      label: "Pinned Repositories",
      value: 4,
      component: RepositoriesContributedTo,
      props: {
        repositories: data.contributedTo,
        user: data.user.viewer,
      },
      icon: "fluent-mdl2:pinned-solid"
    },
  ];
</script>

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
      <div class="gap-y-1.5">
        <Tabs {items} />
        <PaginationComponent />
      </div>
    </div>
  </div>
</main>
