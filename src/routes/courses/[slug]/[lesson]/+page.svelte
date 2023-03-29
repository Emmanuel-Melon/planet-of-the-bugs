<script>
  import { onMount } from "svelte";
  export let data;
  let { lesson } = data;
  import CodeEditor from "$components/CodeEditor/CodeEditor.svelte";
  import { query, mutation } from "svelte-apollo";
  import { FETCH_COURSE_BY_PK } from "$lib/queries/lessons";
  import LessonOverview from "$components/Lessons/LessonOverview.svelte";

  const course = query(FETCH_COURSE_BY_PK, {
    variables: {
      id: lesson,
    },
  });

  onMount(async () => {
    course.refetch();
  });
  $: course.refetch();

  console.log(course);
</script>

<section class="border border-#efefef p-2 rounded-sm card bg-base-100 shadow-md">
  <div class="p-2">
    {#if $course.data}
    <LessonOverview lesson={$course.data.lessons_by_pk} />
  {:else}
    <p>Loading...</p>
  {/if}
  </div>
</section>
