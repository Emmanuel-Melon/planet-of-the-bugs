<script>
  import { signIn, signOut } from "@auth/sveltekit/client";
  import { page } from "$app/stores";
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<h1>Planet of The Bugs</h1>

<main>
  <p>
    {#if $page.data.session}
      <span class="signedInText">
        <small>Signed in as</small>
        <strong>{$page.data.session.user?.name ?? "User"}</strong>
      </span>
    {/if}
  </p>
  <div class="flex">
    <div>
      <h3>Active Courses</h3>
    </div>
    <div>
      <h3>Active Courses</h3>
    </div>
  </div>
</main>
