<script>
    // @ts-nocheck
  import { onMount } from "svelte";
  import { FETCH_COURSES } from "$lib/queries/courses";
  import { query, mutation } from "svelte-apollo";
  import CourseCard from "$components/CourseCard.svelte";

  const courses = query(FETCH_COURSES);

  onMount(async () => {
    courses.refetch();
  });
  $: courses.refetch();
</script>

<div class="flex gap-4">
    {#if $courses.data}
    {#each $courses.data.courses as course}
    <CourseCard course={course} />
    {/each}
    {:else}
    <p>Loading...</p>
    {/if}
</div>
  