<script>
  import { signIn, signOut } from "@auth/sveltekit/client";
  import { page } from "$app/stores";
  import { onMount, onDestroy } from "svelte";
  import { query } from "svelte-apollo";
  import { FETCH_COURSES } from "$lib/graphql/queries/courses";
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
  <meta name="description" content="Planet of the Bugs uses AI to generate fake bug scenarios for developers to learn debugging skills and the fundamentals of writing secure and robust software. By using AI, the app can provide an endless supply of unique scenarios, allowing developers to practice and hone their skills." />
</svelte:head>

<section class="p-4">
  <div>
    <div class="mb-4">
      <h3 class="flex items-center gap-2">
        <iconify-icon icon="ri:graduation-cap-line" />
        Continue Learning
      </h3>
    </div>
    <div class="card card-compact bg-white w-full shadow">
      <div class="card-body">
        <h2 class="card-title">Introduction to Debugging</h2>
        <progress class="progress progress-success w-56" value="70" max="100" />
        <div class="card-actions justify-end gap-2">
          <button class="btn btn-sm btn-primary">Hunt Bugs &amp; Issues</button>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="flex flex-col md:flex-row p-4 gap-4">
  <div class="card card-compact bg-white w-full shadow">
    <div class="card-body space-y-2">
      <div class="flex justify-between items-center">
        <h2 class="card-title">        <iconify-icon icon="ri:git-repository-line" />
          Subscribed Repositories</h2>

      <div>
        <a href="/repositories/subscribed" class="link">See all</a>
      </div>
    </div>
      <div class="stats stats-vertical lg:stats-horizontal">

        <div class="stat">
          <div class="stat-title">Downloads</div>
          <div class="stat-value">31K</div>
          <div class="stat-desc">Jan 1st - Feb 1st</div>
        </div>
        
        <div class="stat">
          <div class="stat-title">New Users</div>
          <div class="stat-value">4,200</div>
          <div class="stat-desc">↗︎ 400 (22%)</div>
        </div>
        
        <div class="stat">
          <div class="stat-title">New Registers</div>
          <div class="stat-value">1,200</div>
          <div class="stat-desc">↘︎ 90 (14%)</div>
        </div>
        
      </div>
      <div class="card-actions justify-end gap-2">
        <button class="btn btn-sm btn-primary">Hunt Bugs &amp; Issues</button>
      </div>
    </div>
  </div>
  <div class="card card-compact bg-white w-full shadow">
    <div class="card-body space-y-2">
      <div class="flex justify-between items-center">
        <h2 class="card-title">        <iconify-icon icon="ri:git-repository-line" />
          Subscribed Repositories</h2>

      <div>
        <a href="/repositories/subscribed" class="link">See all</a>
      </div>
    </div>
      <div class="stats stats-vertical lg:stats-horizontal">

        <div class="stat">
          <div class="stat-title">Downloads</div>
          <div class="stat-value">31K</div>
          <div class="stat-desc">Jan 1st - Feb 1st</div>
        </div>
        
        <div class="stat">
          <div class="stat-title">New Users</div>
          <div class="stat-value">4,200</div>
          <div class="stat-desc">↗︎ 400 (22%)</div>
        </div>
        
        <div class="stat">
          <div class="stat-title">New Registers</div>
          <div class="stat-value">1,200</div>
          <div class="stat-desc">↘︎ 90 (14%)</div>
        </div>
        
      </div>
      <div class="card-actions justify-end gap-2">
        <button class="btn btn-sm btn-primary">Hunt Bugs &amp; Issues</button>
      </div>
    </div>
  </div>
</section>
