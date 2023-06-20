<script>
  // @ts-nocheck
  import { page } from "$app/stores";
  import { onMount, onDestroy } from "svelte";
  import { signOut } from "@auth/sveltekit/client";
  import "iconify-icon";
  import { Dropdown } from "svelte-ui";

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
    { text: "My Profile", path: `/${user?.username}`, icon: "ri:user-2-line" },
    { text: "Authored Courses", path: "/authored", icon: "ri:book-read-line" },
    { text: "Settings", path: "/settings", icon: "ri:settings-3-line" }
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

  const notifications = [
    {
      id: 1,
      name: "Gyomei Himejima",
      avatar:
        "https://staticg.sportskeeda.com/editor/2021/12/d8fd2-16407278993535-1920.jpg",
      text: "We are proud to live and die as human beings.",
      active: false,
    },
    {
      id: 2,
      name: "Muzan Kibutsuji",
      avatar:
        "https://m.media-amazon.com/images/M/MV5BMzcyZjYxYzktMWZhMi00ZGFkLTllMTEtNjJjZjU4ODdlYzRmXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
      text: "Prepare to witness the true terror of the Demong King!",
      active: true,
    },
    {
      id: 3,
      name: "Ryuk",
      avatar:
        "https://cdn.europosters.eu/image/750/canvas-print-death-note-ryuk-checkered-i147611.jpg",
      text: "Hahahahaha",
      active: false,
    },
  ];
</script>

<header class="navbar bg-white shadow">
  <div class="navbar-start gap-4">
    <a href="/" class="normal-case text-md">Planet Of The Bugs</a>
  </div>

  <nav>
    <ul class="navbar-center hidden lg:flex items-center gap-2">
      {#each menuLinks as { icon, text, path }}
        <li
          class={`hover:bg-base-200 hover:text-black transition-all rounded-md  ${path === current ? "p-2 hidden lg:flex hover:bg-primary hover:text-white bg-primary text-primary-content"
          : "p-2 hidden lg:flex"} `}
        >
          <a href={path} class="flex items-center gap-2"><iconify-icon icon={icon}/> {text}</a>
        </li>
      {/each}
    </ul>
  </nav>

  <div class="navbar-end relative gap-2 items-center">
    <Dropdown items={notifications}>
      <iconify-icon icon="ri:notification-line" height="20" width="20" /> 
      </Dropdown>
    <div class="dropdown dropdown-end lg:hidden">
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <div tabindex="0" class="btn btn-ghost btn-circle text-3xl">
        <iconify-icon icon="ri:menu-4-line" />
      </div>
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <ul
        tabindex="0"
        class="menu menu-compact dropdown-content mt-3 p-2 shadow-lg rounded-box w-52 bg-base-100"
      >
        {#each menuLinks as { text, path, icon }}
          <li>
            <a href={path}><iconify-icon icon={icon}/>  {text}</a>
          </li>
        {/each}
        <li>
          {#if user}
            <button on:click|preventDefault={() => signOut()}><iconify-icon icon="ri:logout-circle-line" /> Sign Out</button>
          {:else}
            <a href="/auth">Sign In</a>
          {/if}
        </li>
      </ul>
    </div>

    <div class="dropdown dropdown-bottom dropdown-end">
      {#if user}
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <div tabindex="0" class="btn btn-secondary shadow btn-circle avatar">
          <div class="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={user.image} alt={user.name} />
          </div>
        </div>
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-base-100"
        >
          {#each dropdownLinks as { text, path, icon }}
            <li>
              <a href={path}><iconify-icon icon={icon}/> {text}</a>
            </li>
          {/each}
          <li>
            <button on:click|preventDefault={() => signOut()}><iconify-icon icon="ri:logout-circle-line" /> Sign Out</button>
          </li>
        </ul>
      {:else}
      <div class="flex gap-2 items-center">
        <a href="/auth" class="btn btn-primary btn-sm gap-2"><iconify-icon icon="ri:login-circle-line" /> Sign In</a>
      </div>
      {/if}
    </div>

  </div>
</header>
