<script>
  import { onMount } from "svelte";
  import StartCourseButton from "$components/StartCourseButton.svelte";
  import LessonOutline from "$components/Lessons/LessonOutline.svelte";
  export let data;
  let { course, active } = data;
  onMount(async () => {});

  $: course, active;;

</script>


  <div class="flex flex-col lg:flex-row gap-2">
    <div class="basis-2/5">
      <div class="card w-full bg-white shadow-xl">
        <div class="card-body">
          <h2 class="card-title">{course.title}</h2>
          <div class="divider">Description</div>
          <p>{course.description}</p>
          <div class="card-actions justify-end">
            <StartCourseButton
            status={active?.status}
            course_id={course.id}
            slug={course.slug}
          />
          </div>
        </div>
      </div>
    </div>
    <div class="basis-3/5">
      <LessonOutline chapters={course.course_chapters} />
    </div>
  </div>

