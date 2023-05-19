<script>
  import { signIn, signOut } from "@auth/sveltekit/client";
  import { page } from "$app/stores";
  import "iconify-icon";
  import { redirect } from "@sveltejs/kit";
  import { goto } from "$app/navigation";

  const handleGithubLogin = async () => {
    const result = await signIn("github");
    console.log("result");
    goto("/");
  };

  const handleGithubLogout = async () => {
    const result = await signOut("github");
    console.log(result);
    goto("/auth");
  };
</script>

<section class="flex justify-center items-center">
  {#if $page.data.session}
    <div class="card w-2/5 bg-white shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Welcome to Planet of The Bugs</h2>
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

        <div class="card-actions justify-end">
          <button on:click={handleGithubLogout} class="btn">Sign out</button>
        </div>
      </div>
    </div>
  {:else}
    <div class="card w-2/5 bg-white shadow-xl p-4">
      <div class="card-body text-center">
        <div class="mx-auto">
          <h2 class="card-title">Planet of The Bugs</h2>
        </div>
        <p>
          Join our vibrant community to level up your coding skills, take on
          real-life bugs from open-source repositories.
        </p>
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Email Address</span>
          </label>
          <input
            type="text"
            placeholder="bug@planet.xyz"
            class="input bg-white input-accent input-bordered w-full"
          />
        </div>
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Your password"
            class="input bg-white input-accent input-bordered w-full"
          />
          <label class="label">
            <span class="label-text-alt">Must be at least 8 characters</span>
            <span class="label-text-alt"><iconify-icon icon="ri:shield-keyhole-line" /> Strong</span>
          </label>
        </div>

        <button class="btn btn-primary">Register</button>
        <div class="divider">Or Register with</div>
        <button
          class="btn bg-black text-white gap-2"
          on:click={handleGithubLogin}
        >
          <iconify-icon icon="ri:github-fill" />
          Sign In with GitHub
        </button>
        <span class="notSignedInText">Already have an account?</span>
      </div>
    </div>
  {/if}
</section>
