<!-- routes/signup/+page.svelte -->
<script lang="ts">
  import { enhance } from "$app/forms";
  import { Card } from "svelte-ui";
</script>

<section class="flex w-full gap-4 p-4 items-center justify-center">
  <div>
    <Card title="Sign up">
        <form method="post" use:enhance class="space-y-2">
          <div class="form-control w-full">
            <label class="label" for="username">
              <span class="label-text text-neutral">Username</span>
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
              name="password"
              class="input input-sm bg-white input-bordered w-full"
              id="password"
            />
          </div>
          <input type="submit" class="btn btn-sm btn-primary w-full" />
        </form>
    </Card>
  </div>
</section>
