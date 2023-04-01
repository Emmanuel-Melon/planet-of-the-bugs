<script>
// @ts-nocheck

  import { page } from '$app/stores';
  import { onMount, onDestroy } from 'svelte';
  import { signOut } from '@auth/sveltekit/client';
  import "iconify-icon";

  let user;
  $: current = $page.url.pathname
  $: menuLinks = [
    { text: 'Home', path: '/' },
    { text: 'Courses', path: '/courses' },
    { text: 'About', path: '/about' }
  ];

  onMount(() => {
    user = $page.data.session?.user;
  });

  onDestroy(() => {
    user = null;
    current = null;
    menuLinks = [];
  });

</script>

<header class="navbar bg-base-100">
    <div class="navbar-start">
      <a href='/' class="btn btn-ghost normal-case text-xl">Planet Of The Bugs</a>
    </div>

    <ul class="navbar-center hidden lg:flex justify-between items-center w-1/5 text-lg font-bold">
      {#each menuLinks as { text, path }}
        <li class={path === current ? "hidden lg:flex transition-all underline-offset-8 decoration-primary hover:underline underline" : "hidden lg:flex transition-all underline-offset-8 decoration-primary hover:underline"}>
          <a href={path}>{text}</a>
        </li>
      {/each}
    </ul>

    <div class="navbar-end relative">
      <div class="dropdown dropdown-end lg:hidden">
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <div tabindex="0" class="btn btn-ghost btn-circle text-3xl">
          <iconify-icon icon="heroicons:bars-3-bottom-right-20-solid" />
        </div>
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          {#each menuLinks as { text, path }}
            <li>
              <a href={path}>{text}</a>
            </li>
          {/each}
          <li>
            {#if user}
              <button on:click|preventDefault={() => signOut()}>Sign Out</button>
            {:else}
              <a href="/auth">Sign In</a>
            {/if}
          </li>
        </ul>
      </div>

    <div class="dropdown dropdown-end lg:block hidden text-3xl btn-ghost mr-4">
      {#if user}
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <div tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img src={user.image} alt={user.name} />
          </div>
        </div>
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <button on:click|preventDefault={() => signOut()}>Sign Out</button>
          </li>
        </ul>
      {:else}
        <a href="/auth" class="btn btn-outline btn-primary">Sign In</a>
      {/if}
    </div>
    </div>
</header>
