<script>
  import { page } from "$app/stores";
  import logo from "$lib/images/svelte-logo.svg";
  import github from "$lib/images/github.svg";
  import "iconify-icon";


  $: current = $page.url.pathname

</script>

<header class="navbar bg-base-100">
    <div class="navbar-start">
      <a href='/' class="btn btn-ghost normal-case text-xl">Planet Of The Bugs</a>
    </div>

    <ul class="navbar-center hidden lg:flex justify-between items-center w-1/3 text-lg font-bold">
      <li 
      class={current === '/' ?
       "hidden lg:flex transition-all underline-offset-8 decoration-primary hover:underline underline"
        : "hidden lg:flex transition-all underline-offset-8 decoration-primary hover:underline"}
        >
        <a href="/">Home</a>
      </li>
      <li 
      class={current === '/courses' ?
       "hidden lg:flex transition-all underline-offset-8 decoration-primary hover:underline underline"
        : "hidden lg:flex transition-all underline-offset-8 decoration-primary hover:underline"}
        >
        <a href="/courses">Courses</a>
      </li>
      <li 
      class={current === '/about' ?
       "hidden lg:flex transition-all underline-offset-8 decoration-primary hover:underline underline"
        : "hidden lg:flex transition-all underline-offset-8 decoration-primary hover:underline"}
        >
        <a href="/about">About</a>
      </li>
    </ul>

    <div class="navbar-end">
       <button class="lg:hidden block text-3xl btn-ghost">
        <iconify-icon icon="heroicons:bars-3-bottom-right" />
       </button>

       <button class="lg:block hidden text-3xl btn-ghost mr-4">
        <iconify-icon icon="heroicons:user-solid" />
       </button>
    </div>
  

  <!-- <nav>
    <svg viewBox="0 0 2 3" aria-hidden="true">
      <path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
    </svg>
    <ul>
      <li aria-current={$page.url.pathname === "/" ? "page" : undefined}>
        <a href="/">Home</a>
      </li>
      <li aria-current={$page.url.pathname === "/courses" ? "page" : undefined}>
        <a href="/courses">Courses</a>
      </li>
      <li aria-current={$page.url.pathname === "/about" ? "page" : undefined}>
        <a href="/about">About</a>
      </li>
    </ul>
    <svg viewBox="0 0 2 3" aria-hidden="true">
      <path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
    </svg>
  </nav> -->

</header>
