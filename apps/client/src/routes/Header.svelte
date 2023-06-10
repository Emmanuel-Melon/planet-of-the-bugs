<script>
  // @ts-nocheck
  import { page } from "$app/stores";
  import { onMount, onDestroy } from "svelte";
  import { signOut } from "@auth/sveltekit/client";
  import "iconify-icon";

  let user;
  $: current = $page.url.pathname;
  $: menuLinks = [
    { text: "Learn", path: "/courses", icon: "ri:graduation-cap-line" },
    { text: "Repositories", path: "/repositories", icon: "ri:git-repository-line" },
    { text: "BugsHub", path: "/bugs", icon: "ri:bug-line" },
    { text: "Messages", path: "/messages", icon: "ri:message-3-line" },
    { text: "Resources", path: "/resources", icon: "ri:folder-5-line" },
  ];

  $: dropdownLinks = [
    { text: "My Profile", path: "/profile", icon: "ri:user-2-line" },
    { text: "Authored Courses", path: "/authored", icon: "ri:book-read-line" },
    { text: "Settings", path: "/settings", icon: "ri:settings-3-line" },
    { text: "About", path: "/about", icon: "ri:information-line" },
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
</script>

<header class="navbar bg-white shadow">
  <div class="navbar-start gap-4">
    <a href="/" class="normal-case text-md">Planet Of The Bugs</a>
  </div>

  <nav>
    <ul class="navbar-center hidden lg:flex items-center gap-2">
      {#each menuLinks as { icon, text, path }}
        <li
          class={`hover:bg-base-200 hover:text-black transition-all rounded-md  ${path === current ? "p-2 hidden lg:flex hover:bg-primary bg-primary text-primary-content"
          : "p-2 hidden lg:flex"} `}
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
        class="menu menu-compact dropdown-content mt-3 p-2 shadow-lg rounded-box w-52 text-primary bg-base-100"
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
        <div tabindex="0" class="btn bg-base-200 btn-circle avatar">
          <div class="w-10 rounded-full">
            <img src={user.image} alt={user.name} />
          </div>
        </div>
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow-lg rounded-box w-52 bg-base-100"
        >
          {#each dropdownLinks as { text, path, icon }}
            <li>
              <a href={path}><iconify-icon icon={icon}/> {text}</a>
            </li>
          {/each}
          <li>
            <button on:click|preventDefault={() => signOut()}><iconify-icon icon="heroicons:arrow-right-on-rectangle-20-solid" /> Sign Out</button>
          </li>
        </ul>
      {:else}
      <div class="flex gap-2 items-center">
        <a href="/auth" class="btn btn-primary gap-2"><iconify-icon icon="ri:login-circle-line" /> Sign In</a>
      </div>
      {/if}
    </div>

  </div>
</header>
