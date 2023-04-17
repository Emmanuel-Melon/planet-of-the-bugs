<script>
  import { onMount } from "svelte";
  import StartCourseButton from "$components/StartCourseButton.svelte";
  import LessonOutline from "$components/Lessons/LessonOutline.svelte";

  export let data;
  let { course, active } = data;

  onMount(async () => {});

  $: course, active;
</script>

<div>
  <h1 class="prose lg:prose-xl">{course.title}</h1>
  <p>{course.description}</p>
  <StartCourseButton
    status={active?.status}
    course_id={course.id}
    slug={course.slug}
  />
  <LessonOutline chapters={course.course_chapters}/>
</div>
