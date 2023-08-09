<script lang="ts">
  import { signIn, signOut } from '@auth/sveltekit/client';
  import { Card, Button } from 'svelte-ui';
  import { page } from '$app/stores';

  const handleGithubLogin = async () => {
    try {
      const result = await signIn('github', { callbackUrl: '/' });
    } catch (err) {
      console.log('error');
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signIn('google', { callbackUrl: '/' });
    } catch (err) {
      console.log('error');
    }
  };

  const handleLinkedInLogin = async () => {
    try {
      const result = await signIn('linkedin', { callbackUrl: '/' });
    } catch (err) {
      console.log('error');
    }
  };

  const handleGithubLogout = async () => {
    await signOut('github');
  };
</script>

<section class="flex w-full gap-4 p-4 items-center justify-center">
  <div class="flex-2">
    {#if $page.data.session}
      <Card title="Welcome to Planet of The Bugs">
        <span class="signedInText">
          <small>Hello, Bug Slayer!</small><br />
        </span>
        <div class="flex items-center gap-4">
          <div class="avatar">
            <div
              class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
            >
              <img
                src={$page.data.session.user?.image}
                alt={$page.data.session.user?.name ?? 'User'}
              />
            </div>
          </div>

          <h2 class="card-title">{$page.data.session.user?.name ?? 'User'}</h2>
        </div>

        <div class="card-actions justify-start">
          <button on:click={handleGithubLogout} class="btn btn-sm gap-2"
            ><iconify-icon icon="ri:logout-circle-line" /> Sign out</button
          >
        </div>
      </Card>
    {:else}
      <Card title="Planet of The Bugs">
        <form class="space-y-2">
          <div class="form-control w-full">
            <label class="label" for="email">
              <span class="label-text text-neutral">Email Address</span>
            </label>
            <input
              type="email"
              placeholder="bug@planet.xyz"
              class="input input-sm bg-white input-bordered w-full"
              id="email"
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
            />
          </div>
          <a href="auth/new-user" class="btn btn-sm btn-primary gap-2 w-full"
            ><iconify-icon icon="ri:login-circle-line" /> Sign In</a
          >
        </form>
        <div class="divider">Sign In with</div>
        <div class="card-actions items-center justify-center gap-2">
          <a href="login/github" class="btn btn-sm btn-outline gap-2">
            <iconify-icon icon="ri:github-line" />
            GitHub
          </a>
          <button
            class="btn btn-sm btn-outline gap-2"
            on:click={handleGoogleLogin}
          >
            <iconify-icon icon="ri:google-line" />
            Google
          </button>
          <button
            class="btn btn-sm btn-outline gap-2"
            on:click={handleLinkedInLogin}
          >
            <iconify-icon icon="ri:linkedin-box-line" />
            Linkedin
          </button>
        </div>

        <span class="notSignedInText">Don't have an account?</span>
      </Card>
    {/if}
  </div>

  <!-- <div>
    <passage-auth app-id={`${PUBLIC_PASSAGE_APP_ID}`} />
    <script src="https://psg.so/web.js"></script>
  </div> -->
</section>
