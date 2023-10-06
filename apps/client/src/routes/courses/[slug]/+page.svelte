<script>
  import { onMount } from 'svelte';
  import StartCourseButton from '$components/StartCourseButton.svelte';
  import LessonOutline from '$components/Lessons/LessonOutline.svelte';
  export let data;
  import 'iconify-icon';
  import CourseCard from '$components/CourseCard.svelte';
  let { course } = data;

  // $: course;
</script>

<section class="w-full bg-base-200 h-fit p-4">
  <div class="space-y-4 w-1/8 mx-auto p-2">
    <div class="flex items-start gap-4">
      <a href="/courses" class="btn btn-sm btn-outline">
        <iconify-icon icon="ri:arrow-left-line" />
      </a>
      <div>
        <h1 class="text-xl lg:text-2xl text-primary-content">{course?.title}</h1>
        <p>{course?.description}</p>
      </div>
    </div>
    
  </div>
</section>

<div class="flex flex-col lg:flex-row gap-2 p-2">
  <div class="basis-3/5 space-y-2">
    <div class="flex justify-between items-center w-full gap-2">
      <h3 class="text-xl font-bold">Course Chapters</h3>
      <div class="flex gap-2">
        <div class="badge badge-lg badge-outline gap-2">
          <iconify-icon icon="ri:booklet-line" />
        </div>
        <div class="badge badge-lg badge-outline gap-2">
          <iconify-icon icon="ri:code-s-slash-line" />
        </div>
        <div class="badge badge-lg badge-outline gap-2">
          <iconify-icon icon="ri:video-line" />
        </div>
      </div>
    </div>
    <LessonOutline chapters={course.course_chapters} {course} />
  </div>
</div>
