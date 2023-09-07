<script lang="ts">
  // @ts-nocheck
  export let data;
  import { onMount } from "svelte";
  import { FETCH_COURSES } from "$lib/graphql/queries/courses";
  import { query } from "svelte-apollo";
  import SidebarFilter from "$components/SidebarFilter.svelte";
  import { PageHeader } from "svelte-ui";
  let { user } = data;
  import autoAnimate from "@formkit/auto-animate";
  import CoursesList from "$components/Courses/CoursesList.svelte";
  let offset = 0;
  let limit = 2;

  let courses = query(FETCH_COURSES, {
    variables: {
      limit,
      offset
    }
  });

  onMount(async () => {
    courses.refetch();
  });
  $: courses.refetch();

  const criteria = [
    {
      id: 1,
      title: 'Complexity',
      icon: 'ri:bar-chart-2-line',
    },
    {
      id: 2,
      title: 'Duration',
      icon: 'ri:time-line',
    },
  ];

  $: user;

  const loadMoreCourses = () => {
    limit = limit + 1;
    courses.fetchMore({
      variables: {
        limit
      }
    });
  }
</script>

<PageHeader
  description="Discover a world of software defects, debugging techniques, and programming pitfalls. Join our community of curious developers and learn how to track down and squash those pesky bugs."
  heading="Explore the Planet of Bugs"
/>

<section class="p-2">
  <div class="flex flex-col lg:flex-row gap-2">
    <div class="items-center basis-4/5 mx-auto">
      <div use:autoAnimate>
        {#if $courses.data}
          <CoursesList courses={$courses.data.courses} {user} />
        {:else if $courses.error}
          <h3>Error</h3>
        {:else if $courses.loading}
          <div>Loading</div>
        {/if}
      </div>
    </div>
  </div>
</section>
