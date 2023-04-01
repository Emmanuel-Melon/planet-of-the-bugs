<script>
  import { onMount } from "svelte";
  import CodeEditor from "$components/CodeEditor/CodeEditor.svelte";
  import CodeOutput from "$components/CodeEditor/CodeOutput.svelte";
  import MarkdownView from "$components/CodeEditor/MarkdownView.svx";
  import { query, mutation } from "svelte-apollo";
  import LessonOverview from "$components/Lessons/LessonOverview.svelte";
  
  export let data;
  let { lesson } = data;

  

  // const newLesson = query(FETCH_LESSON_BY_INDEX, {
  //   variables: {
  //     chapter_id: content.data.lessons_by_pk.chapter_id,
  //     index: content.data.lessons_by_pk.index + 1,
  //   }
  // })

  // onMount(async () => {
  //   content.refetch();
  // });
  // $: content.refetch();

  // console.log(content);
</script>

<section
  class="border border-#efefef rounded-sm card bg-base-100 shadow-md box-border"
>
  <div class="flex">
    <div class="flex-1 p-4 relative">
      {#if lesson}
        <LessonOverview lesson={lesson} />
        <MarkdownView />
        <div class="absolute bottom-0 right-0 left-0 flex justify-between">
          <button class="btn">Previous</button>
          <button class="btn" >Next</button>
        </div>
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
