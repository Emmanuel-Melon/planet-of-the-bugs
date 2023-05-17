<script>
  // @ts-nocheck

  import { page } from "$app/stores";
  import { onMount, onDestroy } from "svelte";
  import { signOut } from "@auth/sveltekit/client";
  import "iconify-icon";
  import github from '$lib/images/github.svg';

  let user;
  $: current = $page.url.pathname;
  $: menuLinks = [
    { text: "Learn", path: "/courses", icon: "heroicons:academic-cap-20-solid" },
    { text: "Explore Projects", path: "/explore", icon: "heroicons:bug-ant-20-solid" },
    { text: "Chat", path: "/chat", icon: "heroicons:chat-bubble-bottom-center-text-20-solid" },
    { text: "Notifications", path: "/notifications", icon: "heroicons:bell-alert-20-solid" },
  ];

  $: dropdownLinks = [
    { text: "Profile", path: "/profile", icon: "heroicons:user-20-solid" },
    { text: "My Courses", path: "/authored", icon: "heroicons:book-open-solid" },
    { text: "Settings", path: "/settings", icon: "heroicons:adjustments-horizontal-solid" },
    { text: "About", path: "/about", icon: "heroicons:information-circle-20-solid" },
  ];

  onMount(() => {
    user = $page.data.session?.user;
  });

  onDestroy(() => {
    user = null;
    current = null;
    menuLinks = [];
    dropdownLinks = [];
  });

  let theme = "light";
</script>

<header class="navbar bg-white shadow-xl">
  <div class="navbar-start gap-4">
    <a href="/" class="normal-case text-md">Planet Of The Bugs</a>
    <input
      type="checkbox"
      class={`toggle toggle-md ${
        theme === "light" ? "toggle-bg-green-100" : "toggle-bg-blue-100"
      }`}
      checked
    />
  </div>

  <nav>
    <ul class="navbar-center hidden lg:flex items-center gap-4 text-md">
      {#each menuLinks as { icon, text, path }}
        <li
          class={path === current
            ? "p-2 hidden lg:flex transition-all  decoration-accent rounded-md"
            : "p-2 hidden lg:flex transition-all underline-offset-8 decoration-primary-focus rounded-md"}
        >
          <a href={path} class="flex items-center gap-2"><iconify-icon icon={icon}/> {text}</a>
        </li>
      {/each}
    </ul>
  </nav>

  <div class="navbar-end relative gap-2 items-center">
    <div class="dropdown dropdown-end lg:hidden">
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <div tabindex="0" class="btn btn-ghost btn-circle text-3xl">
        <iconify-icon icon="heroicons:bars-3-bottom-right-20-solid" />
      </div>
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <ul
        tabindex="0"
        class="menu menu-compact dropdown-content mt-3 p-2 shadow-lg rounded-box w-52"
      >
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

    <div class="dropdown dropdown-bottom dropdown-end">
      {#if user}
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <div tabindex="0" class="btn btn-primary btn-circle avatar">
          <div class="w-10 rounded-full">
            <img src={user.image} alt={user.name} />
          </div>
        </div>
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52"
        >
          {#each dropdownLinks as { text, path, icon }}
            <li class="hover:bg-primary-focus">
              <a href={path}><iconify-icon icon={icon}/> {text}</a>
            </li>
          {/each}
          <li>
            <button class="hover:bg-accent-focus" on:click|preventDefault={() => signOut()}><iconify-icon icon="heroicons:arrow-right-on-rectangle-20-solid" /> Sign Out</button>
          </li>
        </ul>
      {:else}
      <div class="flex gap-2 items-center">
        <a href="/auth" class="btn btn-sm btn-ghost">Sign In</a>
        <a href="/auth" class="btn btn-sm btn-secondary">Start for Free</a>
      </div>
      {/if}
    </div>
    <div class="corner">
      <a href="https://github.com/sveltejs/kit">
        <img src={github} alt="GitHub" />
      </a>
    </div>
  </div>
</header>
