<script>
  import { onMount } from "svelte";
  // @ts-ignore
  import { gql } from "@apollo/client/core/core.cjs";
  import { query } from "svelte-apollo";
  import { page } from "$app/stores";
  import { FETCH_COURSE_BY_SLUG, FETCH_COURSE_BY_COMPOSITE } from "$lib/queries/courses";
  import StartCourseButton from "../../../components/StartCourseButton.svelte";
  
  export let data;
  const { slug } = data;

  const courseBySlug = query(FETCH_COURSE_BY_SLUG, {
    variables: { slug },
  });

  const activeCourse = query(FETCH_COURSE_BY_COMPOSITE, { variables: { user_id: "a4f9150e-4619-4b18-807d-2f273b75c12f", course_id: "6477f941-f072-4f1e-95da-b1d02a81ae6f" } });

  onMount(async () => {
    courseBySlug.refetch();
  });

  $: courseBySlug.refetch();

</script>


{#if $courseBySlug.data}
  <div>
    {#each $courseBySlug.data.courses as course}
      <div> 
        <h1>{course.name}</h1>
        <p>{course.description}</p>
        <StartCourseButton />
      </div>
    {/each}
  </div>
{:else}
  <p>Loading...</p>
{/if}
