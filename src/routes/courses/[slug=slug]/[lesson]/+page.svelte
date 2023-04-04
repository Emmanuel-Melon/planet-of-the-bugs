<script>
  import { onMount } from "svelte";
  export let data;
  let { lesson } = data;
  import CodeEditor from "$components/CodeEditor/CodeEditor.svelte";
  import CodeOutput from "$components/CodeEditor/CodeOutput.svelte";
  import MarkdownView from "$components/CodeEditor/MarkdownView.svx";
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

  $: isExpanded = false;

  const handleExpand = () => {
    isExpanded = !isExpanded;
    console.log(isExpanded)
  }
</script>

<section
  class="border border-#efefef rounded-sm card bg-base-100 shadow-md box-border"
>
  <div class="flex">
    
    <div class={isExpanded ? "hidden" : "flex-1 p-4"}>
      {#if $course.data}
        <LessonOverview lesson={$course.data.lessons_by_pk} />
        <MarkdownView />
      {:else}
        <p>Loading...</p>
      {/if}
    </div>

    <div class="flex-1 w-full">
      <CodeEditor handleExpand={handleExpand} isExpanded={isExpanded}/>
      {#if !isExpanded}
      <CodeOutput />
      {/if}
    </div>
  </div>

</section>
