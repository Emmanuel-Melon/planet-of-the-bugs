<script>
  // @ts-nocheck
  import { page } from '$app/stores';
  import { onMount, onDestroy } from 'svelte';
  import 'iconify-icon';
  import { Dropdown } from 'svelte-ui';
  import Button from 'svelte-ui/components/Button.svelte';

  let user;
  $: current = $page.url.pathname;
  $: menuLinks = [
    { text: 'Home', path: '/', icon: 'ri:home-4-line' },
    { text: 'Learn', path: '/courses', icon: 'ri:graduation-cap-line' },
    {
      text: 'Repositories',
      path: '/repositories',
      icon: 'ri:git-repository-line',
    },
    { text: 'BugsHub', path: '/bugs', icon: 'ri:bug-line' },
  ];

  $: dropdownLinks = [
    { text: 'My Profile', path: `/${user?.username}`, icon: 'ri:user-2-line' },
    { text: 'Authored Courses', path: '/authored', icon: 'ri:book-read-line' },
    { text: 'Settings', path: '/settings', icon: 'ri:settings-3-line' },
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
      name: 'Gyomei Himejima',
      avatar:
        'https://staticg.sportskeeda.com/editor/2021/12/d8fd2-16407278993535-1920.jpg',
      text: 'We are proud to live and die as human beings.',
      active: false,
    },
    {
      id: 2,
      name: 'Muzan Kibutsuji',
      avatar:
        'https://m.media-amazon.com/images/M/MV5BMzcyZjYxYzktMWZhMi00ZGFkLTllMTEtNjJjZjU4ODdlYzRmXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg',
      text: 'Prepare to witness the true terror of the Demong King!',
      active: true,
    },
    {
      id: 3,
      name: 'Ryuk',
      avatar:
        'https://cdn.europosters.eu/image/750/canvas-print-death-note-ryuk-checkered-i147611.jpg',
      text: 'Hahahahaha',
      active: false,
    },
  ];
</script>

<header
  class="h-screen fixed w-16 lg:w-fit max-w-[260px] p-4 flex flex-col justify-between items-center lg:items-start gap-2 shadow-2xl border-r border-white/60"
>
  <div class="flex flex-col space-y-6">
    <div>
      <span class="text-lg">Planet Of The Bugs</span>
    </div>

    <nav>
      <ul class="flex flex-col items-start gap-2">
        {#each menuLinks as { icon, text, path }}
          <li>
            <a
              href={path}
              class={`btn btn-ghost hover:bg-base-100 normal-case font-light gap-2 group transition-all ${
                path === current && ' text-primary'
              }`}
              ><iconify-icon
                {icon}
                width={25}
                class="group-hover:scale-125 group-hover:text-primary"
              />
              <span class="hidden lg:block group-hover:text-primary"
                >{text}</span
              ></a
            >
          </li>
        {/each}
      </ul>
    </nav>
  </div>

  <div class="w-full flex flex-col gap-2 lg:gap-3">
    <!-- when there's a user display messages & notifications -->
    <a
      href="/messages"
      class="flex justify-between items-center btn btn-ghost hover:bg-base-100 px-1 normal-case font-light group"
    >
      <div class="flex items-center gap-2">
        <iconify-icon
          icon="ri:message-3-line"
          width={25}
          class="group-hover:scale-125 group-hover:text-primary"
        />
        <span class="hidden lg:block group-hover:text-primary">Messages</span>
      </div>
      <span
        class=" hidden lg:block bg-neutral rounded-full px-1 text-base-100 text-xs group-hover:text-primary"
        >10</span
      >
    </a>

    <div
      class="flex flex-col items-center lg:items-start gap-3 lg:w-52 bg-slate-900 p-2 rounded-xl text-sm"
    >
      <iconify-icon icon="ri:notification-4-line" width={20} />
      <div class="hidden lg:block">
        <span class="font-semibold pb-1">Update your profile</span>
        <p>To access all the features, be sure to update your profile now.</p>
      </div>
      <div class="hidden lg:flex justify-start items-center space-x-2">
        <Button
          CTA="Dismiss"
          ButtonSize="xs"
          ButtonType="ghost"
          classes="normal-case"
        />
        <a href="/notifications" class="btn btn-xs btn-ghost normal-case"
          >All Notifications</a
        >
      </div>
    </div>

    <div class="divider before:bg-white/60 after:bg-white/60" />

    <div class="dropdown dropdown-top">
      {#if user}
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <div
          tabindex="0"
          class="flex flex-col lg:flex-row text-xs gap-4 items-center"
        >
          <div class="avatar btn btn-secondary shadow btn-circle">
            <div class="w-10 rounded-full shadow">
              <img src={user?.image} alt={user?.name} />
            </div>
          </div>
          <span class="hidden lg:block">Maged Faiz</span>
        </div>
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow w-52 bg-base-100 border border-white/60 rounded-xl"
        >
          {#each dropdownLinks as { text, path, icon }}
            <li>
              <a href={path}><iconify-icon {icon} /> {text}</a>
            </li>
          {/each}
          <li>
            <button on:click|preventDefault={() => signOut()}
              ><iconify-icon icon="ri:logout-circle-line" /> Sign Out</button
            >
          </li>
        </ul>
      {:else}
        <div class="flex gap-2 items-center">
          <a href="/login" class="btn btn-sm gap-2"
            ><iconify-icon icon="ri:login-circle-line" /> Sign In</a
          >
        </div>
      {/if}
    </div>
  </div>
</header>
