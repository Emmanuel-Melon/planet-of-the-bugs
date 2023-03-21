<script>
  import { onMount } from "svelte";
  // @ts-ignore
  import { gql } from "@apollo/client/core/core.cjs";
  import { query } from "svelte-apollo";
  import { page } from "$app/stores";
  import { FETCH_COURSE_BY_SLUG } from "$lib/queries/courses";
  export let data;
  const { slug } = data;

  const course = query(FETCH_COURSE_BY_SLUG, {
    variables: { slug },
  });

  console.log(course?.data);

  onMount(async () => {
    course.refetch();
  });

  $: course.refetch();

  console.log(course?.data);

</script>


{#if $course.data}
  <div>
    {#each $course.data.courses as course}
      <div>
        <h1>{course.name}</h1>
        <p>{course.description}</p>
      </div>
    {/each}
  </div>
{:else}
  <p>Loading...</p>
{/if}
