<script lang="ts">
  import { signIn, signOut } from "@auth/sveltekit/client";
  import { Card, Button } from "svelte-ui";
  import { page } from "$app/stores";
  import { enhance } from "$app/forms";

  const handleGithubLogout = async () => {
    await signOut("github");
  };
</script>

<section class="flex w-full gap-4 p-4 items-center justify-center">
  <Card>
    <form method="post" use:enhance class="space-y-2">
      <div class="form-control w-full">
        <label class="label" for="username">
          <span class="label-text text-neutral">Email Address</span>
        </label>
        <input
          type="username"
          placeholder="bug@planet.xyz"
          class="input input-sm bg-white input-bordered w-full"
          id="username"
          name="username"
        />
      </div>
      <div class="form-control w-full">
        <label class="label" for="password">
          <span class="label-text text-neutral">Password</span>
        </label>
        <input
          type="password"
          placeholder="Your password"
          class="input input-sm bg-white input-bordered w-full"
          id="password"
          name="password"
        />
      </div>
      <input type="submit" class="btn btn-sm btn-primary w-full" />
    </form>
    <div class="divider">Sign In with</div>
    <div class="card-actions items-center justify-center gap-2">
      <a href="login/github" class="btn btn-sm btn-outline gap-2 w-full">
        <iconify-icon icon="ri:github-line" />
        GitHub
      </a>
    </div>
  </Card>
</section>
