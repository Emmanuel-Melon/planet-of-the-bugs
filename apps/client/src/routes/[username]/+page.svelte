<script lang="ts">
  export let data;
  import UserGithubStats from '$components/User/UserGithubStats.svelte';
  import UserProfileCard from '$components/User/UserProfileCard.svelte';
  import RepositoriesContributedTo from '$components/User/RepositoriesContributedTo.svelte';
  import OwnedRepositories from '$components/Repositories/OwnedRepositories.svelte';
  import SubscribedRepositories from '$components/Repositories/SubscribedRepositories.svelte';
  import UserPinnedItems from '$components/User/UserPinnedItems.svelte';

  import avatar from '$lib/images/avatar.png';
  import { Button, Card, Tabs } from 'svelte-ui';
  let {
    user,
    githubProfileData,
    subscribedTo,
    repositories,
    contributionData,
    pinned,
  } = data;

  type TabItem = {
    label?: string;
    value: number;
    component?: any;
    props?: any;
    icon?: string;
  };

  export let icon = 'ri:star-line';

  const items = [
    {
      label: 'Repositories',
      value: 1,
      component: OwnedRepositories,
      props: {
        repositories: repositories,
      },
      icon: 'ri:git-repository-line',
    },
    {
      label: 'Contributed To',
      value: 2,
      component: RepositoriesContributedTo,
      props: {
        repositories: contributionData,
        user: githubProfileData?.githubUser,
      },
      icon: 'ri:git-pull-request-fill',
    },
    {
      label: 'Subscribed Repositories',
      value: 3,
      component: SubscribedRepositories,
      props: {
        repositories: subscribedTo,
        // user: githubProfileData?.githubUser,
      },
      icon: 'ri:base-station-line',
    },
    {
      label: 'Pinned Items',
      value: 4,
      component: UserPinnedItems,
      props: {
        pinnedItems: pinned,
      },
      icon: 'ri:pushpin-2-line',
    },
  ];

  let activeTabValue = 1;

  const handleTabClick = (tabValue: TabItem['value']) => () =>
    (activeTabValue = tabValue);
</script>

<section>
  <!-- <div class="flex flex-col lg:flex-row gap-2">
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
  </div> -->
  <div class="bg-primary h-40 w-full" />
  <div class="px-6 lg:px-10">
    <div>
      <div class="flex justify-between items-center">
        <div class="avatar -mt-10">
          <div class="w-24 bg-secondary rounded-full">
            <img
              src={githubProfileData?.avatarUrl ?? avatar}
              alt={githubProfileData?.username || user?.username}
            />
            Avatar
          </div>
        </div>
        <Button
          CTA={`Follow ${user.name.split(' ')[0]}`}
          ButtonSize="sm"
          classes="normal-case"
        />
      </div>

      <div class="flex flex-col mt-6 gap-4">
        <div class="flex items-center gap-2">
          <p class="text-xl font-bold">{user.name}</p>
          <p class="text-sm opacity-50">@{user.username}</p>
        </div>

        <div class="max-w-lg text-sm">
          <p>
            {githubProfileData.bio}
          </p>
        </div>

        <div class="flex flex-wrap gap-1 md:gap-4">
          {#if githubProfileData.websiteUrl}
            <div class="flex items-center gap-1">
              <iconify-icon icon="ri:global-line" />
              <a href={githubProfileData.websiteUrl} class="link opacity-50"
                >{githubProfileData.websiteUrl.replace(/^(https?:\/\/)/, '')}</a
              >
            </div>
          {/if}
          {#if githubProfileData.twitterUsername}
            <div class="flex items-center gap-1">
              <iconify-icon icon="ri:twitter-x-line" />
              <p class="opacity-50">@{githubProfileData.twitterUsername}</p>
            </div>
          {/if}
          {#if githubProfileData.location}
            <div class="flex items-center gap-1">
              <iconify-icon icon="ri:map-pin-line" />
              <p class="opacity-50">{githubProfileData.location}</p>
            </div>
          {/if}
        </div>

        <div class="flex flex-wrap gap-1 md:gap-4">
          <div class="flex items-center gap-1">
            <p>
              69
              <span class="opacity-50">Followers</span>
            </p>
          </div>

          {#if githubProfileData.repositories}
            <div class="flex items-center gap-1">
              <p>
                {githubProfileData.repositories.totalCount}
                <span class="opacity-50">Repositories</span>
              </p>
            </div>
          {/if}
          {#if githubProfileData.pullRequests}
            <div class="flex items-center gap-1">
              <p>
                {githubProfileData.pullRequests.totalCount}
                <span class="opacity-50">Pull Requests</span>
              </p>
            </div>
          {/if}
          {#if githubProfileData.starredRepositories}
            <div class="flex items-center gap-1">
              <p>
                {githubProfileData.starredRepositories.totalCount}
                <span class="opacity-50">Starred Repositories</span>
              </p>
            </div>
          {/if}
        </div>
      </div>

      <div class="my-10">
        <div>
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center py-2 bg-gray-800/40 rounded-lg"
          >
            {#each items as item}
              <button
                class={`w-10/12 flex justify-center items-center py-3 gap-2 rounded-lg hover:text-primary ${
                  activeTabValue === item.value
                    ? 'bg-neutral text-base-100'
                    : ''
                }`}
                on:click={handleTabClick(item.value)}
                ><iconify-icon icon={item.icon || icon} /> {item.label}</button
              >
            {/each}
          </div>

          <div class="mt-4">
            {#each items as item}
              {#if activeTabValue == item.value}
                <div class="w-full gap-2">
                  <svelte:component this={item.component} {...item.props} />
                </div>
              {/if}
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
