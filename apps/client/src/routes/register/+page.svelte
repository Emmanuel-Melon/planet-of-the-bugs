<!-- routes/signup/+page.svelte -->
<script lang="ts">
  import { enhance } from "$app/forms";
  import { Card, FormControl, Input } from "svelte-ui";
</script>

<section class="flex w-full gap-4 p-4 items-center justify-center">
  <div>
    <div class="w-1/4">
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
            <label class="label" for="password">
              <span class="label-text text-neutral">Password</span>
            </label>
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
  </div>
</section>
