<script lang="ts">
  export let data;
  import UserGithubStats from "$components/User/UserGithubStats.svelte";
  import UserProfileCard from "$components/User/UserProfileCard.svelte";
  import RepositoriesContributedTo from "$components/User/RepositoriesContributedTo.svelte";
  import OwnedRepositories from "$components/Repositories/OwnedRepositories.svelte";
  import SubscribedRepositories from "$components/Repositories/SubscribedRepositories.svelte";
  import UserPinnedItems from "$components/User/UserPinnedItems.svelte";
  import { Card, Tabs } from "svelte-ui";
  let { currentUser, user, githubProfileData, subscribedTo, repositories } = data;

  console.log(githubProfileData);
  // const items = [
  //   {
  //     label: "Repositories",
  //     value: 1,
  //     component: OwnedRepositories,
  //     props: {
  //       repositories: githubProfileData?.repositories,
  //     },
  //     icon: "ri:git-repository-line",
  //   },
  //   {
  //     label: "Contributed To",
  //     value: 2,
  //     component: RepositoriesContributedTo,
  //     props: {
  //       repositories: githubProfileData?.contributedTo,
  //       user: githubProfileData?.githubUser,
  //     },
  //     icon: "ri:git-pull-request-fill",
  //   },
  //   {
  //     label: "Subscribed Repositories",
  //     value: 3,
  //     component: SubscribedRepositories,
  //     props: {
  //       repositories: githubProfileData?.subscribedTo,
  //       // user: githubProfileData?.githubUser,
  //     },
  //     icon: "ri:base-station-line",
  //   },
  //   {
  //     label: "Pinned Items",
  //     value: 4,
  //     component: UserPinnedItems,
  //     props: {
  //       pinnedItems: githubProfileData?.pinnedItems,
  //     },
  //     icon: "ri:pushpin-2-line",
  //   },
  // ];
</script>


<section class="p-4">
  <div class="flex flex-col lg:flex-row gap-2">
    <div class="lg:w-1/3">
      <UserProfileCard
        githubUser={githubProfileData?.githubUser}
        {user}
        {currentUser}
      />
    </div>
    <div class="lg:w-2/3 space-y-2">
      <UserGithubStats
      repositoriesTotal={githubProfileData?.repositories.totalCount}
      pullRequestsTotal={githubProfileData?.githubUser.pullRequests
        .totalCount}
      followersTotal={githubProfileData?.githubUser.followers.totalCount}
      StarredTotal={githubProfileData?.githubUser.starredRepositories
        .totalCount}
    />
    <div class="gap-y-3">
      
    </div>
    </div>
  </div>
</section>
