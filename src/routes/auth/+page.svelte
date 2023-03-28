<script>
    import { signIn, signOut } from "@auth/sveltekit/client"
    import { page } from "$app/stores"
  </script>

<p>
  {#if $page.data.session}
    {#if $page.data.session.user?.image}
      <span
        style="background-image: url('{$page.data.session.user.image}')"
        class="avatar"
      />
    {/if}
    <span class="signedInText">
      <small>Signed in as</small><br />
      <strong>{$page.data.session.user?.name ?? "User"}</strong>
    </span>
    <button on:click={() => signOut()} class="btn">Sign out</button>
  {:else}
    <span class="notSignedInText">You are not signed in</span>
    <button class="btn btn-primary" on:click={() => signIn("github")}>Sign In with GitHub</button>
    <button class="btn btn-primary" on:click={() => signIn("google")}>Sign In with Google</button>
  {/if}
</p>