<script>
  export let data;
  import UserGithubStats from "$components/User/UserGithubStats.svelte";
  import UserProfileCard from "$components/User/UserProfileCard.svelte";
  import RepositoriesContributedTo from "$components/User/RepositoriesContributedTo.svelte";

  import { page } from "$app/stores";
  import { onMount, onDestroy } from "svelte";

  let user;

  onMount(() => {
    user = $page.data.session?.user;
  });

 
  console.log(data.topRepos);
</script>

<main>
  <div class="flex gap-4">
    <UserProfileCard
      user={data.user.viewer || {}}
      image={data.session?.user?.image || {}}
    />
    <div>
      <div class="stats shadow h-fit bg-white">
        <div class="stat place-items-center">
          <div class="stat-title">Repositories</div>
          <div class="stat-value">{data.user.viewer.repositories.totalCount}</div>
        </div>
  
        <div class="stat place-items-center">
          <div class="stat-title">Pull Requests</div>
          <div class="stat-value text-secondary">{data.user.viewer.pullRequests.totalCount}</div>
        </div>
  
        <div class="stat place-items-center">
          <div class="stat-title">Followers</div>
          <div class="stat-value">{data.user.viewer.followers.totalCount}</div>
        </div>
        <div class="stat place-items-center">
          <div class="stat-title">Starred Repositories</div>
          <div class="stat-value">{data.user.viewer.starredRepositories.totalCount}</div>
        </div>
      </div>
      <RepositoriesContributedTo repositories={data.contributedTo} />
    </div>

    </div>
</main>
