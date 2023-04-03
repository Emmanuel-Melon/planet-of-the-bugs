<script>
// @ts-nocheck

  import { onMount } from "svelte";
  import apolloClient from "$lib/apollo";
  import CodeEditor from "$components/CodeEditor/CodeEditor.svelte";
  import CodeOutput from "$components/CodeEditor/CodeOutput.svelte";
  import { query, mutation } from "svelte-apollo";
  import { FETCH_COURSE_BY_PK } from "$lib/queries/lessons";
  import LessonOverview from "$components/Lessons/LessonOverview.svelte";
  
  export let data;
   $: ({ lesson, lessons_total } = data);
    
  $: next = { id: null, title: null};
  $: prev = { id: null, title: null};
    
    
  onMount(async () => {   
    // Fetch next lesson
    if(lesson.index < lessons_total) {
      next = await fetchNewLesson(lesson.chapter_id, lesson.index + 1);
    }

    // Fetch previous lesson
    if(lesson.index > 1) {
      prev = await fetchNewLesson(lesson.chapter_id, lesson.index - 1);
    }
  });

  const fetchNewLesson = async ( chapter_id,  new_index) => {
    const {data} = await apolloClient.query({
      query: FETCH_LESSON_BY_INDEX,
      variables: {     
        chapter_id,
        new_index,     
      }
    })

    return data.lessons[0]
  }

  const handleNavigate = (newId) => {
    let currentUrlId = window.location.href.split('/').pop();
    let newpath = window.location.href.replace(currentUrlId, newId);

    window.history.pushState(null, null, newpath);
  }

  
</script>

<section
  class="border border-#efefef rounded-sm card bg-base-100 shadow-md"
>
  <div class="flex">
    <div class="flex-1 p-4">
      {#if $course.data}
        <LessonOverview lesson={$course.data.lessons_by_pk} />
      {:else}
        <p>Loading...</p>
      {/if}
    </div>
    <div class="flex-1">
      <CodeEditor />
      <CodeOutput />
    </div>
  </div>

</section>
