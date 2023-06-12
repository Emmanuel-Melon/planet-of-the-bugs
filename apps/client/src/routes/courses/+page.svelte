<script>
  // @ts-nocheck
  export let data;
  import { onMount } from "svelte";
  import { FETCH_COURSES } from "$lib/graphql/queries/courses";
  import { query, mutation } from "svelte-apollo";
  import CourseCard from "$components/CourseCard.svelte";
  import SearchBar from "$components/SearchBar.svelte";
  import SidebarFilter from "$components/SidebarFilter.svelte";
  import { PageHeader } from "svelte-ui";
  let { user } = data;

  const courses = query(FETCH_COURSES);

  onMount(async () => {
    courses.refetch();
  });
  $: courses.refetch();

  const criteria = [
    {
      id: 1,
      title: "Complexity",
      icon: "ri:bar-chart-2-line",
    },
    {
      id: 2,
      title: "Duration",
      icon: "ri:time-line",
    },
  ];

  $: user;
</script>

<PageHeader
  description="Discover a world of software defects, debugging techniques, and programming pitfalls. Join our community of curious developers and learn how to track down and squash those pesky bugs."
  heading="Explore the Planet of Bugs"
/>
<section class="h-max min-h-full space-y-4 p-4">
  <div class="flex flex-col lg:flex-row gap-2">
    <div class="gap-2 grow bg-base-200 shadow">
      <SidebarFilter {criteria} CTA="Filter Courses" />
    </div>
    <div class="flex gap-4 items-start flex-wrap basis-4/5">
      {#if $courses.data}
        {#each $courses.data.courses as course}
          <CourseCard {course} userId={user.id} />
        {/each}
      {:else}
        <div class="card bg-black text-white">
          <div class="card-body">
            <h2 class="card-title">Loading</h2>
            <span class="loading loading-bars loading-lg" />
          </div>
        </div>
      {/if}
    </div>
  </div>
</section>
