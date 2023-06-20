<script>
  import { onMount } from "svelte";
  export let data;
  let { lesson } = data;
  import { NextPrev } from "svelte-ui";
  import LessonSidebar from "$components/Lessons/LessonSidebar.svelte";
</script>

<section class="h-screen">
  <div class="flex justify-between items-center p-2 bg-base-200">
    <div class="text-md breadcrumbs">
      <ul>
        <li>
          <a href="/">
            <iconify-icon icon="ri:arrow-right-double-line" />
            Home
          </a>
        </li>
      </ul>
    </div>
    <div>
      <h1 class="text-xl">Hey</h1>
    </div>
    <NextPrev />
  </div>
  <div class="flex h-full">
    <div class="basis-1/5 h-full">
      <slot />
    </div>
  </div>
</section>
