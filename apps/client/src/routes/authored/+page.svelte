<script lang="ts">
  // @ts-nocheck
  import { query } from "svelte-apollo";
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import { FETCH_AUTHORED_COURSES } from "$lib/graphql/queries/courses";
  import AuthoredCourseCard from "$components/AuthoredCourseCard.svelte";
  import "iconify-icon";
  import NewCourseModal from "$components/Modals/NewCourseModal.svelte";

  const {
    data: { user },
  } = $page;

  const courses = query(FETCH_AUTHORED_COURSES, {
    variables: {
      creator: user.id,
    },
  });

  onMount(async () => {
    courses.refetch();
  });
  $: courses.refetch();
</script>

<section class="flex gap-2 p-4">
  <div class="w-full space-y-4">
    <div class="flex justify-between gap-2 items-center">
      <h3 class="text-xl">My Courses</h3>
      <NewCourseModal {user} />
    </div>
    <div class="flex gap-1 flex-wrap">
      {#if $courses.data}
        {#each $courses.data.courses as course}
          <AuthoredCourseCard {course} />
        {/each}
      {:else}
        <div class="mx-auto p-4">
          <span class="loading loading-bars loading-lg" />
        </div>
      {/if}
    </div>
  </div>
</section>
