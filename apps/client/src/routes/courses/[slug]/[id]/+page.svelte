<script>
  export let data;
  let { lesson } = data;
  import { NextPrev } from "svelte-ui";
  import LessonTextContent from "$components/Lessons/LessonTextContent.svelte";
  import LessonVideoContent from "$components/Lessons/LessonVideoContent.svelte";
  import LessonInteracticeContent from "$components/Lessons/LessonInteracticeContent.svelte";
</script>

<section class="h-screen">
  <div class="p-4 bg-base-200">
    <button class="btn btn-sm btn-outline">Back</button>
    <div class="flex justify-between items-center">
      <div class="text-md breadcrumbs">
        <ul>
          <li><a>Courses</a></li>
          <li><a>Course</a></li>
          <li>{lesson.data.lessons_by_pk.title}</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="p-2 space-y-2">
    {#if lesson.data.lessons_by_pk.type === "text" || lesson.data.lessons_by_pk.type === "Text"}
      <LessonTextContent lesson={lesson.data.lessons_by_pk} />
    {:else if lesson.data.lessons_by_pk.type === "video" || lesson.data.lessons_by_pk.type === "Video"}
      <LessonVideoContent lesson={lesson.data.lessons_by_pk} />
    {:else if lesson.data.lessons_by_pk.type === "Interactive" || lesson.data.lessons_by_pk.type === "interactive"}
      <LessonInteracticeContent lesson={lesson.data.lessons_by_pk} />
    {/if}

    <div class="flex justify-between items-center">
      <NextPrev />
    </div>
    <div class="form-control w-fit">
      <label class="cursor-pointer label  gap-2">
        <input type="checkbox" checked="checked" class="checkbox checkbox-sm checkbox-success" />
        <span class="label-text">Mark as Completed</span>
      </label>
    </div>
  </div>
</section>
