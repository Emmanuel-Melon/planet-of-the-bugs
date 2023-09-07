<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { NextPrev } from 'svelte-ui';
  import LessonTextContent from '$components/Lessons/LessonTextContent.svelte';
  // import LessonVideoContent from '$components/Lessons/LessonVideoContent.svelte';
  // import LessonInteractiveContent from '$components/Lessons/LessonInteractiveContent.svelte';
  import navigationStore, { updateNavigationStore } from './navigationStore.js';

  export let data;
  $: ({ lesson, course } = data);

  let nav: {
    nextLesson: any;
    previousLesson: any;
    currentChapterIndex: number;
    currentLessonIndex: number;
  };

  const unSubscribe = navigationStore.subscribe((store) => {
    nav = store;
  });

  onMount(() => {
    updateNavigationStore(course.course_chapters, lesson.chapter_id, lesson.id);
  });

  onDestroy(() => {
    unSubscribe();
  });

  $: {
    // Whenever the route changes, update the navigation store
    updateNavigationStore(course.course_chapters, lesson.chapter_id, lesson.id);
  }
</script>

<section class="">
  <div class="text-sm breadcrumbs pl-2 my-4 flex gap-2">
    <a href={`/courses/${course.slug}`} class="btn btn-xs">
      <iconify-icon icon="ri:arrow-left-line" class="text-xl" />
    </a>
    <ul>
      <li>{course.title}</li>
      <li>{course.course_chapters[nav.currentChapterIndex].title}</li>
      <li>{lesson.index}. {lesson.title}</li>
    </ul>
  </div>

  <div class="p-2 space-y-2">
    <LessonTextContent {lesson} />
    <!-- {#if lesson.type === 'text' || lesson.type === 'Text'}
      <LessonTextContent lesson={lesson} />
    {:else if lesson.type === 'video' || lesson.type === 'Video'}
      <LessonVideoContent lesson={lesson} />
    {:else if lesson.type === 'Interactive' || lesson.type === 'interactive'}
      <LessonInteractiveContent lesson={lesson} />
    {/if} -->

    <div class="flex justify-between items-center">
      <NextPrev
        slug={course.slug}
        next={nav?.nextLesson}
        prev={nav?.previousLesson}
      />
    </div>
    <div class="form-control w-fit">
      <label class="cursor-pointer label gap-2">
        <input
          type="checkbox"
          checked
          class="checkbox checkbox-sm checkbox-success"
        />
        <span class="label-text">Mark as Completed</span>
      </label>
    </div>
  </div>
</section>
