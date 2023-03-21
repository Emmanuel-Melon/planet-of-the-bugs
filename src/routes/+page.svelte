<script>
  // @ts-nocheck
  import { onMount } from "svelte";
  import { FETCH_COURSES } from "$lib/queries/courses";
  import { query, mutation } from "svelte-apollo";

  const courses = query(FETCH_COURSES);

  onMount(async () => {
    courses.refetch();
  });
  $: courses.refetch();
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="text-column">
  <h1>Planet of The Bugs</h1>
  <div class="list">
    {#if $courses.data}
      {#each $courses.data.courses as course}
        <div class="course">
          <h3><a  className="link" href={`/courses/${course.slug}`}>{course.name}</a></h3>
          <p>Complexity: {course.complexity}</p>
          <p>{course.description}</p>
          <p>Creator: {course.creator}</p>
        </div>
      {/each}
    {:else}
      <p>Loading...</p>
    {/if}
  </div>
</div>
