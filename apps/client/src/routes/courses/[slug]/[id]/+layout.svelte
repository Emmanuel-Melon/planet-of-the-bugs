<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import { page } from '$app/stores';
  import LessonInteractiveContent from '$components/Lessons/LessonInteractiveContent.svelte';
  export let data;
  const { course, progress } = data;

  const chapters = course.course_chapters;

  // Create an array to store the open state for each chapter
  let chapterOpenStates = Array(chapters.length).fill(false);

  // Function to handle chapter expansion for a given index
  const handleChapterExpand = (index: number) => {
    chapterOpenStates[index] = !chapterOpenStates[index];
    chapterOpenStates = [...chapterOpenStates]; // Trigger reactivity
  };

  // Function to handle closing drawer after navigation
  const handleCloseDrawer = () => {
    document.getElementById('my-drawer')?.click();
  };

  let toggleEditor = false;

  // Detect screen size and set the toggleEditor variable accordingly
  const setToggleEditorBasedOnScreenSize = () => {
    toggleEditor = window.innerWidth < 1024; // Example breakpoint at 1024px, adjust as needed
  };

  // Add event listener to window to detect screen size changes
  onMount(() => {
    if (typeof window !== 'undefined') {
      setToggleEditorBasedOnScreenSize();
      window.addEventListener('resize', setToggleEditorBasedOnScreenSize);
    }
  });

  // Cleanup the event listener on component destruction
  onDestroy(() => {
    window.removeEventListener('resize', setToggleEditorBasedOnScreenSize);
  });

  $: currentLessonId = $page.url.pathname.split('/').pop();

  $: currentLesson = findCurrentLesson(chapters, currentLessonId);

  // Find the current lesson based on the lesson ID from the URL
  function findCurrentLesson(
    chapters: any,
    currentLessonId: string | undefined
  ) {
    for (const chapter of chapters) {
      const lesson = chapter.lessons.find(
        (lesson: { id: any }) => lesson.id === currentLessonId
      );
      if (lesson) return lesson;
    }
    return null;
  }
</script>

<div class="drawer">
  <input id="my-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <!-- Page content here -->
    <div class="flex flex-col lg:flex-row">
      <div class="lg:w-1/2">
        <div class="h-12 flex w-full border border-neutral bg-base-200">
          <label
            for="my-drawer"
            class="drawer-button text-3xl cursor-pointer grid place-items-center max-w-fit"
          >
            <iconify-icon icon="ri:menu-line" />
          </label>

          <div class="w-full px-4 flex items-center justify-center">
            <h1 class="font-bold text-xl">{course.title}</h1>
          </div>
        </div>
        {#if toggleEditor}
          {#if currentLesson.type.toLowerCase() === 'text'}
            <p>This lesson has no interactive content</p>
          {:else if currentLesson.type.toLowerCase() === 'video'}
            <p>Lesson Video Component</p>
          {:else}
            <LessonInteractiveContent lesson={currentLesson} />
          {/if}
        {:else}
          <slot />
        {/if}
        {#if currentLesson.type.toLowerCase() !== 'text'}
          <div class="form-control lg:hidden">
            <label class="label cursor-pointer justify-center space-x-4">
              <span class="label-text">Lesson</span>
              <input
                type="checkbox"
                class="toggle"
                checked={toggleEditor}
                on:change={() => (toggleEditor = !toggleEditor)}
              />
              <span class="label-text">
                {#if currentLesson.type.toLowerCase() === 'video'}
                  Video
                {:else}
                  Editor
                {/if}
              </span>
            </label>
          </div>
        {/if}
      </div>
      <div class="hidden lg:block lg:w-1/2">
        {#if currentLesson.type.toLowerCase() === 'text'}
          <p>This lesson has no interactive content</p>
        {:else if currentLesson.type.toLowerCase() === 'video'}
          <p>Lesson Video Component</p>
        {:else}
          <LessonInteractiveContent lesson={currentLesson} />
        {/if}
      </div>
    </div>
  </div>
  <div class="drawer-side">
    <label for="my-drawer" class="drawer-overlay" />
    <ul class="menu p-4 w-80 h-full bg-base-200 text-base-content">
      <!-- Sidebar content here -->
      <p class="font-bold">{course.title}</p>
      {#each chapters as { title, lessons, id }, index}
        <li>
          <button
            on:click={() => handleChapterExpand(index)}
            class="h-8 hover:bg-transparent focus:bg-transparent"
          >
            {#if chapterOpenStates[index]}
              <iconify-icon icon="ri:arrow-down-s-line" />
            {:else}
              <iconify-icon icon="ri:arrow-right-s-line" />
            {/if}
            <p class="-ml-2">{title}</p>
          </button>

          {#if chapterOpenStates[index]}
            <div
              class="flex flex-col items-start hover:bg-transparent pl-10 -mt-2"
            >
              {#each lessons as { index, title, id }}
                <a
                  on:click={handleCloseDrawer}
                  href={`/courses/${course.slug}/${id}`}
                  class={$page.params.id === id ? 'font-bold' : ''}
                  >{index}. {title}
                </a>
              {/each}
            </div>
          {/if}
        </li>
      {/each}
    </ul>
  </div>
</div>
