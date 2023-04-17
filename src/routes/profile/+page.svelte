<script>
  export let data;
  import UserGithubStats from "$components/User/UserGithubStats.svelte";
  import UserProfileCard from "$components/User/UserProfileCard.svelte";
  console.log(data.user.viewer);
</script>

<div class="flex gap-4">
  <UserProfileCard user={data.user.viewer} image={data.session?.user?.image} />
  <UserGithubStats />
</div>
