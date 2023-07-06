<script lang="ts">
  export let data;
  import UserGithubStats from "$components/User/UserGithubStats.svelte";
  import UserProfileCard from "$components/User/UserProfileCard.svelte";
  import RepositoriesContributedTo from "$components/User/RepositoriesContributedTo.svelte";
  import Tabs from "$components/ProfileTabs.svelte";
  import OwnedRepositories from "$components/Repositories/OwnedRepositories.svelte";
  import SubscribedRepositories from "$components/Repositories/SubscribedRepositories.svelte";
  import UserPinnedItems from "$components/User/UserPinnedItems.svelte";
  import { Card } from "svelte-ui";
  let { currentUser, user, githubProfileData } = data;

  // set context for current user

  const items = [
    {
      label: "Repositories",
      value: 1,
      component: OwnedRepositories,
      props: {
        repositories: githubProfileData?.repositories,
      },
      icon: "ri:git-repository-line",
    },
    {
      label: "Contributed To",
      value: 2,
      component: RepositoriesContributedTo,
      props: {
        repositories: githubProfileData?.contributedTo,
        user: githubProfileData?.githubUser,
      },
      icon: "ri:git-pull-request-fill",
    },
    {
      label: "Subscribed Repositories",
      value: 3,
      component: SubscribedRepositories,
      props: {
        repositories: githubProfileData?.subscribedTo,
        // user: githubProfileData?.githubUser,
      },
      icon: "ri:base-station-line",
    },
    {
      label: "Pinned Items",
      value: 4,
      component: UserPinnedItems,
      props: {
        pinnedItems: githubProfileData?.pinnedItems,
      },
      icon: "ri:pushpin-2-line",
    },
  ];
</script>

<div class="flex flex-col lg:flex-row gap-4">
  <div class="lg:w-1/4 space-y-2">
    <UserProfileCard
      githubUser={githubProfileData?.githubUser}
      {user}
      {currentUser}
    />
  </div>
  <div class="lg:w-3/4 space-y-2">
    {#if user?.hasConnectedGithub}
      <UserGithubStats
        repositoriesTotal={githubProfileData?.repositories.totalCount}
        pullRequestsTotal={githubProfileData?.githubUser.pullRequests
          .totalCount}
        followersTotal={githubProfileData?.githubUser.followers.totalCount}
        StarredTotal={githubProfileData?.githubUser.starredRepositories
          .totalCount}
      />
      <div class="gap-y-3">
        <Tabs {items} />
      </div>
    {:else}
      <Card title={currentUser ? "Connect Github" : "User with no Github"}>
        <div class="flex flex-col justify-center items-center space-y-6">
          {#if currentUser}
            <p>
              Connect a Github Account to utilize the full capabilities of
              Planet of The Bugs
            </p>
            <a href="/settings" class="btn btn-sm btn-outline gap-2">
              <iconify-icon icon="ri:settings-3-line" />
              Settings
            </a>
          {:else}
            <p>No Github account linked to this Planet of The Bugs user</p>
          {/if}
        </div>
      </Card>
    {/if}
  </div>
</div>
