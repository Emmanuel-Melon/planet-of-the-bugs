<script lang="ts">
  // @ts-nocheck
  import { onMount } from 'svelte';
  import { query, mutation } from 'svelte-apollo';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { FETCH_AUTHORED_COURSES } from '$lib/graphql/queries/courses';
  import { CREATE_COURSE } from '$lib/graphql/mutations/courses';
  import AuthoredCourseCard from '$components/AuthoredCourseCard.svelte';
  import NewCourseModal from '$components/Modals/NewCourseModal.svelte';
  import 'iconify-icon';

  const {
    data: { user },
  } = $page;

  const courses = query(FETCH_AUTHORED_COURSES, {
    variables: {
      creator: user.id,
    },
  });

  const createCourse = mutation(CREATE_COURSE);

  const handleSubmit = async (event) => {
    try {
      requestState = 'processing';
      const result = await createCourse({
        variables: {
          courseInput: event.detail,
        },
      });
      requestState = 'completed';
      document.getElementById('close')?.click();
      goto(location.href, { replaceState: true, noScroll: true });
    } catch (error) {
      requestState = 'failed';
    }
  };

  onMount(async () => {
    courses.refetch();
  });
  let requestState: 'idle' | 'processing' | 'completed' | 'failed' = 'idle';
  $: courses.refetch(), requestState;
</script>

<section class="flex gap-2 p-4">
  <div class="w-full space-y-4">
    <div class="flex justify-between gap-2 items-center">
      <h3 class="text-xl">My Courses</h3>
      <NewCourseModal {user} {requestState} on:buttonClick={handleSubmit} />
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
