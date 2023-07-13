<script>
  import { signIn, signOut } from "@auth/sveltekit/client";
  import { Card, Button, Tabs } from "svelte-ui";
  import { page } from "$app/stores";
  import { onMount, onDestroy } from "svelte";
  import { query } from "svelte-apollo";
  import { FETCH_COURSES } from "$lib/graphql/queries/courses";
  import ContributionsStats from "$components/User/ContributionsStats.svelte";
  let user;
  import "iconify-icon";
  import { PageHeader } from "svelte-ui";

  import ChoicesPanes from "$components/ChoicesPanes.svelte";

  const courses = query(FETCH_COURSES);

  onMount(async () => {
    courses.refetch();
  });
  $: courses.refetch();

  onMount(() => {
    user = $page.data.session?.user;
  });

  const items = [
    {
      label: "In Progress",
      value: 1,
      icon: "ri:git-repository-line",
    },
    {
      label: "Comleted",
      value: 2,
      icon: "ri:git-pull-request-fill",
    },
    {
      label: "Saved",
      value: 3,
      icon: "ri:base-station-line",
    },
    {
      label: "Authored",
      value: 4,
      icon: "ri:pushpin-2-line",
    },
  ];
</script>

<svelte:head>
  <title>Home</title>
  <meta
    name="description"
    content="Planet of the Bugs uses AI to generate fake bug scenarios for developers to learn debugging skills and the fundamentals of writing secure and robust software. By using AI, the app can provide an endless supply of unique scenarios, allowing developers to practice and hone their skills."
  />
</svelte:head>
<PageHeader
  description="Get ready to sharpen your debugging skills, exchange knowledge, and have a blast along the way."
  heading={`Welcome, ${user?.name}!`}
/>


<section class="p-4 space-y-2">
  <div class="stats shadow">
  
    <div class="stat">
      <div class="stat-figure text-primary">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
      </div>
      <div class="stat-title">Total Likes</div>
      <div class="stat-value text-primary">25.6K</div>
      <div class="stat-desc">21% more than last month</div>
    </div>
    
    <div class="stat">
      <div class="stat-figure text-secondary">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
      </div>
      <div class="stat-title">Page Views</div>
      <div class="stat-value text-secondary">2.6M</div>
      <div class="stat-desc">21% more than last month</div>
    </div>
    
    <div class="stat">
      <div class="stat-figure text-secondary">
        <div class="avatar online">
          <div class="w-16 rounded-full">
            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
      </div>
      <div class="stat-value">86%</div>
      <div class="stat-title">Tasks done</div>
      <div class="stat-desc text-secondary">31 tasks remaining</div>
    </div>
    
  </div>
  <div class="space-y-2">
    <h3 class="flex items-center gap-2">
      <iconify-icon icon="ri:graduation-cap-line" />
      Continue Learning
    </h3>
    <Tabs {items} />
  </div>
</section>

<section class="p-4">
  <div class="space-y-2">
    <div class="flex justify-between items-center space-y-2">
      <h3 class="flex items-center gap-2">
        <iconify-icon icon="ri:git-repository-line" />
        Subscribed Repositories
      </h3>
      <div>
        <a href="/repositories/subscribed" class="link">See all</a>
      </div>
    </div>
  </div>
  <div class="flex items-center gap-2 space-y-2">
    <Card title="Subscribed Repositories">
      <div class="card-actions justify-end gap-2">
        <button class="btn btn-sm btn-primary">Contribute</button>
      </div>
    </Card>
  </div>
</section>
