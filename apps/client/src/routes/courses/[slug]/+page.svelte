<script>
  import { onMount } from "svelte";
  import StartCourseButton from "$components/StartCourseButton.svelte";
  import LessonOutline from "$components/Lessons/LessonOutline.svelte";
  export let data;
  import "iconify-icon";
  let { course, active } = data;
  import { Card } from "svelte-ui";
  onMount(async () => {});

  $: course, active;;

</script>

<section class="w-full body h-fit p-4 text-primary-content">
  <div class="space-y-4 w-1/8 mx-auto p-4">
    <h1 class="text-5xl">{course.title}</h1>
    <p>{course.description}</p>
</section>

<section class="p-4">
  <div class="flex flex-col lg:flex-row gap-2">
    <div class="basis-2/5">
      <Card height="fit" title={course.title}>
        <p>{course.description}</p>
        <div class="card-actions justify-start">
          <StartCourseButton
          status={active?.status}
          course_id={course.id}
          slug={course.slug}
        />
        </div>
      </Card>
    </div>
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
      <LessonOutline chapters={course.course_chapters} {course} {active} />
    </div>
  </div>


</section>

<style>
  .body {
    background: #00467f; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #a5cc82,
      #00467f
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #a5cc82,
      #00467f
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
</style>
