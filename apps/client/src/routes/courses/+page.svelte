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
  import autoAnimate from "@formkit/auto-animate";

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

<section class="p-2">
  <div class="flex flex-col lg:flex-row gap-2">
    <div class="grow">
      <SidebarFilter {criteria} CTA="Filter Courses" />
    </div>

    <div class="space-y-2 items-center basis-4/5">
      <div class="flex justify-between items-center">
        <h3 class="text-xl">Recommended Courses</h3>
        <div class="flex gap-2">
          <button class="btn btn-sm btn-square btn-outline"
            ><iconify-icon icon="ri:arrow-left-double-line" /></button
          >
          <button class="btn btn-sm btn-square btn-outline"
            ><iconify-icon icon="ri:arrow-right-double-line" /></button
          >
        </div>
      </div>
      <div use:autoAnimate class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-2">
        {#if $courses.data}
          {#each $courses.data.courses as course}
            <CourseCard {course} userId={user.id} />
          {/each}
        {:else}
          <span class="loading loading-bars loading-sm" />
        {/if}
      </div>
    </div>
  </div>
</section>
