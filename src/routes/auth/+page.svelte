<script>
  import { signIn, signOut } from "@auth/sveltekit/client";
  import { page } from "$app/stores";
  import "iconify-icon";
  import { redirect } from '@sveltejs/kit';

  const handleGithubLogin = async () => {
    const result = await signIn("github");
      console.log("result");
      redirect(307, '/profile');
  }

  const handleGithubLogout = async () => {
    const result = await signOut("github");
      console.log(result);
      throw redirect(307, '/auth');
  }
</script>

<section class="flex justify-center items-center">
  {#if $page.data.session}
    <div class="card w-96 bg-white shadow-xl">
      <div class="card-body">
        <span class="signedInText">
          <small>Welcome Back</small><br />
        </span>
        <div class="flex items-center gap-4">
          <div class="avatar">
            <div
              class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
            >
              <img
                src={$page.data.session.user.image}
                alt={$page.data.session.user?.name ?? "User"}
              />
            </div>
          </div>

          <h2 class="card-title">{$page.data.session.user?.name ?? "User"}</h2>
        </div>
        <p />
        <div class="card-actions justify-end">
          <button on:click={handleGithubLogout} class="btn">Sign out</button>
        </div>
      </div>
    </div>
  {:else}
    <div class="card w-96 bg-white shadow-xl">
      <div class="card-body">
        <span class="notSignedInText">You are not signed in</span>
        <button
          class="btn bg-black text-white gap-2"
          on:click={handleGithubLogin}
        >
          <iconify-icon icon="ri:github-fill" />
          Sign In with GitHub
        </button>
        <button
          class="btn bg-white text-black gap-2"
          on:click={() => signIn("google")}
        >
          <iconify-icon icon="ion:logo-google" />
          Sign In with Google
        </button>
        <p />
      </div>
    </div>
  {/if}
</section>
