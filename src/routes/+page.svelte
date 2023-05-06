<script>
  import { signIn, signOut } from "@auth/sveltekit/client";
  import { page } from "$app/stores";
  import { onMount, onDestroy } from "svelte";
  import ContributionsStats from "$components/User/ContributionsStats.svelte";
  let user;
  export let data;
  let githubClient;
  import ChoicesPane from "$components/ChoicesPane.svelte";

 

onMount(() => {
  user = $page.data.session?.user;
});
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>


<main>

  <ChoicesPane />
</main>
