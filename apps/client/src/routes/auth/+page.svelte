<script>
  import { signIn, signOut } from "@auth/sveltekit/client";
  import { page } from "$app/stores";
  import "iconify-icon";
  import { redirect } from "@sveltejs/kit";
  import { goto } from "$app/navigation";

  const handleGithubLogin = async () => {
    const result = await signIn("github");
    redirect(307, '/');
  };

  const handleGithubLogout = async () => {
    const result = await signOut("github");
    redirect(307, '/auth');
  };
</script>

<section class="flex justify-center items-center">
  {#if $page.data.session}
    <div class="card w-full md:w-2/3 max-w-xl bg-white shadow">
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
    <div class="card card-compact w-full md:w-2/3 max-w-xl bg-white shadow">

      <div class="card-body text-center space-y-2">
        <div class="mx-auto">
          <h2 class="card-title">Planet of The Bugs</h2>
        </div>
        <button
          class="btn bg-black text-white gap-2"
          on:click={handleGithubLogin}
        >
          <iconify-icon icon="ri:github-line" />
          Sign In with GitHub
        </button>
        <div class="divider">OR</div>
        <div class="form-control w-full">
          <label class="label" for="email">
            <span class="label-text">Email Address</span>
          </label>
          <input
            type="email"
            placeholder="bug@planet.xyz"
            class="input bg-white input-bordered w-full"
            id="email"
          />
        </div>
        <div class="form-control w-full">
          <label class="label" for="password">
            <span class="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Your password"
            class="input bg-white input-bordered w-full"
            id="password"
          />
        </div>

        <a href='auth/new-user' class="btn btn-accent">Register</a>
        <span class="notSignedInText">Already have an account?</span>
      </div>
    </div>
  {/if}
</section>
