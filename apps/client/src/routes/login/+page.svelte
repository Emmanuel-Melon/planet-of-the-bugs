<script lang="ts">
  import { signIn, signOut } from "@auth/sveltekit/client";
  import { Card, Button, FormControl, Input } from "svelte-ui";
  import { page } from "$app/stores";
  import { enhance } from "$app/forms";
  import type { PageData } from './$types';
  export let data: PageData;
</script>

<section class="flex w-full gap-4 p-4 justify-center">
  <div class="w-1/4">
    <div class="card-actions items-center justify-center gap-2">
      <a href="login/github" class="btn btn-sm btn-primary gap-2 w-full">
        <iconify-icon icon="ri:github-line" />
        GitHub
      </a>
    </div>
    <div class="divider">Sign In with</div>
    <form method="post" use:enhance class="space-y-2">
      <FormControl ariaLabel="username" labelText="Username">
        <Input
          inputType="text"
          placeholder="bug@planet.xyz"
          id="username"
          name="username"
        />
      </FormControl>
      <FormControl ariaLabel="password" labelText="Password">
        <Input
          inputType="password"
          placeholder="Your password"
          id="password"
          name="password"
        />
      </FormControl>
      <input type="submit" class="btn btn-sm btn-primary w-full" />
    </form>
  </div>
</section>
