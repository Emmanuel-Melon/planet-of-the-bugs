<script>
  // @ts-nocheck
  import { onMount } from "svelte";
  import { FETCH_COURSES } from "$lib/graphql/queries/courses";
  import { query, mutation } from "svelte-apollo";
  import CourseCard from "$components/CourseCard.svelte";
  import SearchBar from "$components/SearchBar.svelte";
  import PaginationComponent from "$components/PaginationComponent.svelte";
  import SidebarFilter from "$components/SidebarFilter.svelte";

  const courses = query(FETCH_COURSES);

  export let userId = "fae379cf-4387-4dac-a5af-bf092734a464";

  onMount(async () => {
    courses.refetch();
  });
  $: courses.refetch();

  const topics = [
  "Performance",
  "Security",
  "Networking",
  "React",
  "Angular",
  "Vue.js",
  "Node.js",
  "Express",
  "Django",
  "Flask",
];

const criteria = [
    {
      id: 1,
      title: "By Difficulty",
      icon: ""
    },
    {
      id: 2,
      title: "By Duration",
      icon: ""
    }
  ];
</script>

<section class="h-max min-h-ful space-y-4">
  <div class="card bg-white w-full p-4 shadow mb-2">
    <div class="bg-white mb-2 mx-auto text-center w-4/5">
      <h1 class="text-xl">Explore the Planet of Bugs</h1>
      <p>Discover a world of software defects, debugging techniques, and programming pitfalls. Join our community of curious developers and learn how to track down and squash those pesky bugs.</p>
    </div>
    <div class="flex items-center justify-center">
      <SearchBar />
    </div>
    <div class="bg-white mt-2 flex flex-col items-center justify-center">
      <h3 class="text-xl">Popular Topics</h3>
      <div class="flex flex-wrap mt-2 gap-2">
        {#each topics as topic}
          <div class="badge badge-outline badge-lg gap-2`">
            {topic}
          </div>
        {/each}
      </div>
    </div>
  </div>
  <div class="flex flex-col lg:flex-row gap-2">
    <div class="gap-2 grow">
      <SidebarFilter {criteria} CTA="Filter Courses" />
    </div>
    <div class="flex gap-4 items-start flex-wrap basis-4/5">
      {#if $courses.data}
        {#each $courses.data.courses as course}
          <CourseCard {course} {userId }/>
        {/each}
      {:else}
        <div class="card bg-black text-white">
          <div class="card-body">
            <h2 class="card-title">Loading</h2>
            <span class="loading loading-bars loading-lg"></span>
          </div>
        </div>
      {/if}
    </div>
  </div>
</section>
