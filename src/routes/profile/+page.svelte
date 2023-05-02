<script>
  export let data;
  import UserGithubStats from "$components/User/UserGithubStats.svelte";
  import UserProfileCard from "$components/User/UserProfileCard.svelte";
  import RepositoriesContributedTo from "$components/User/RepositoriesContributedTo.svelte";
  import PaginationComponent from "$components/PaginationComponent.svelte";
  import { page } from "$app/stores";
  import { onMount, onDestroy } from "svelte";
  import ContributionsByRepo from "$components/User/ContributionsByRepo.svelte";

  let user;

  onMount(() => {
    user = $page.data.session?.user;
  });


</script>

<main class="w-full">
  <div class="flex gap-2">
    <div class="flex-1">
      <UserProfileCard
        user={data.user.viewer || {}}
        image={data.session?.user?.image || {}}
      />
    </div>
    <div class="flex-2">
      <UserGithubStats user={data.user.viewer}/>
      
      <RepositoriesContributedTo
        repositories={data.contributedTo}
        user={data.user.viewer}
      />
    </div>
  </div>
  <PaginationComponent />
</main>
