<script>
  export let data;
  import UserGithubStats from "$components/User/UserGithubStats.svelte";
  import UserProfileCard from "$components/User/UserProfileCard.svelte";



  import { page } from "$app/stores";
  import { onMount, onDestroy } from "svelte";

  let user;

onMount(() => {
  user = $page.data.session?.user;
});
</script>

<main>
  <div class="flex gap-4">
    <UserProfileCard user={data.user.viewer} image={data.session?.user?.image} />
 

  </div>
  
</main>