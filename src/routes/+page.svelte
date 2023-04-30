<script>
  import { signIn, signOut } from "@auth/sveltekit/client";
  import { page } from "$app/stores";
  import { onMount, onDestroy } from "svelte";
  import ContributionsStats from "$components/User/ContributionsStats.svelte";

  let user;

onMount(() => {
  user = $page.data.session?.user;
});
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>


<main>

  <div class="flex gap-2">
    <div class="flex-2">
      <ContributionsStats user={user} />
    </div>
    <div class="flex-1">
      <ContributionsStats user={user} />
    </div>
  </div>
</main>
