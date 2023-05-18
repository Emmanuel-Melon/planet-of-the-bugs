<script>
  import { signIn, signOut } from "@auth/sveltekit/client";
  import { page } from "$app/stores";
  import { onMount, onDestroy } from "svelte";
  import { query } from "svelte-apollo";
  import { FETCH_COURSES } from "$lib/queries/courses";
  import ContributionsStats from "$components/User/ContributionsStats.svelte";
  let user;
  import "iconify-icon";

  import ChoicesPanes from "$components/ChoicesPanes.svelte";

  const courses = query(FETCH_COURSES);

  onMount(async () => {
    courses.refetch();
  });
  $: courses.refetch();

  onMount(() => {
    user = $page.data.session?.user;
  });
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="p-4">
  <div>
    <div class="mb-4">
      <h3 class="flex items-center gap-2">
        <iconify-icon icon="heroicons:academic-cap-solid" />
        Continue Learning
      </h3>
    </div>
    <div class="card bg-white w-full shadow-lg p-4">
      <div class="flex justify-between items-center">
        <div>
          <h1>Introduction to Debugging</h1>
          <progress
            class="progress progress-success w-56"
            value="70"
            max="100"
          />
        </div>
        <div>
          <button class="btn btn-sm btn-primary">Continue Training</button>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="flex p-4 gap-4">
  <div class="basis-2/5">
    <div class="mb-4">
      <h3 class="flex items-center gap-2">
        <iconify-icon icon="ri:bug-line" />
        Issues/ Bugs
      </h3>
    </div>
    <div class="card bg-white w-full shadow-lg p-4">
      <div class="flex justify-between items-center">
        <div>
          <h1>Introduction to Debugging</h1>
          <progress
            class="progress progress-success w-56"
            value="70"
            max="100"
          />
        </div>
        <div>
          <button class="btn btn-sm btn-primary">Hunt Bugs &amp; Issues</button>
        </div>
      </div>
    </div>
  </div>
  <div class="basis-2/5">
    <div class="mb-4">
      <h3 class="flex items-center gap-2">
        <iconify-icon icon="ri:bug-line" />
        Issues/ Bugs
      </h3>
    </div>
    <div class="card bg-white w-full shadow-lg p-4">
      <div class="flex justify-between items-center">
        <div>
          <h1>Introduction to Debugging</h1>
          <progress
            class="progress progress-success w-56"
            value="70"
            max="100"
          />
        </div>
        <div>
          <button class="btn btn-sm btn-primary">Hunt Bugs &amp; Issues</button>
        </div>
      </div>
    </div>
  </div>
</section>
