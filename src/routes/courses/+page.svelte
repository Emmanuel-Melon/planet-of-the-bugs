<script>
  // @ts-nocheck
  import { onMount } from "svelte";
  import { FETCH_COURSES } from "$lib/queries/courses";
  import { query, mutation } from "svelte-apollo";
  import CourseCard from "$components/CourseCard.svelte";
  import SearchBar from "$components/SearchBar.svelte";
  import PaginationComponent from "$components/PaginationComponent.svelte";

  const courses = query(FETCH_COURSES);

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
</script>

<section class="h-max min-h-ful">
  <div class="card bg-white w-full p-4 border-e shadow-sm border-2 border-secondary mb-2">
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
  <div class="flex gap-2">
    <div class="flex-1 gap-2">
      <div
        class="card p-4 bg-white shadow-lg border-solid border-e border-accent"
      >
      <div class="divider">Filter Courses</div>
        <div>
          <div class="form-control">
            <label class="cursor-pointer label">
              <span class="label-text">Beginner Courses</span>
              <input
                type="checkbox"
                class="checkbox checkbox-primary"
              />
            </label>
          </div>
          <div class="form-control">
            <label class="cursor-pointer label">
              <span class="label-text">Intermediate Courses</span>
              <input
                type="checkbox"
                class="checkbox checkbox-primary"
              />
            </label>
          </div>
          <div class="form-control">
            <label class="cursor-pointer label">
              <span class="label-text">Advanced Courses</span>
              <input
                type="checkbox"
                class="checkbox checkbox-primary"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="flex gap-2 flex-wrap">
      {#if $courses.data}
        {#each $courses.data.courses as course}
          <CourseCard {course} />
        {/each}
      {:else}
        <p>Loading...</p>
      {/if}
    </div>
  </div>
  <PaginationComponent />
</section>
