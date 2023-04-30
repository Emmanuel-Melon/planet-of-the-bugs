<script>
  // @ts-nocheck

  import { page } from "$app/stores";
  import { onMount, onDestroy } from "svelte";
  import { signOut } from "@auth/sveltekit/client";
  import "iconify-icon";

  let user;
  $: current = $page.url.pathname;
  $: menuLinks = [
    { text: "Courses", path: "/courses" },
    { text: "Explore Bugs", path: "/explore" },
  ];

  $: dropdownLinks = [
    { text: "Profile", path: "/profile" },
    { text: "My Courses", path: "/authored" },
    { text: "About", path: "/about" },
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

<header class="navbar bg-white shadow-sm">
  <div class="navbar-start gap-4">
    <a href="/" class="normal-case text-xl">Planet Of The Bugs</a>
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
      {#each menuLinks as { text, path }}
        <li
          class={path === current
            ? "hidden lg:flex transition-all underline-offset-8 decoration-primary hover:underline underline"
            : "hidden lg:flex transition-all underline-offset-8 decoration-accent hover:underline"}
        >
          <a href={path}>{text}</a>
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
        <div tabindex="0" class="btn btn-accent btn-circle avatar">
          <div class="w-10 rounded-full">
            <img src={user.image} alt={user.name} />
          </div>
        </div>
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52"
        >
          {#each dropdownLinks as { text, path }}
            <li>
              <a href={path}>{text}</a>
            </li>
          {/each}
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
