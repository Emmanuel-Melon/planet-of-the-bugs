<script>
  import { onMount } from "svelte";
  export let data;
  let { lesson } = data;
  import { NextPrev } from "svelte-ui";
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
          <h1 class="text-xl">{lesson.data.lessons_by_pk.title}</h1>
        </div>
        <NextPrev />
      </div>
    <slot />
</section>


