<script>
  import { onMount } from "svelte";
  import StartCourseButton from "$components/StartCourseButton.svelte";
  import LessonOutline from "$components/Lessons/LessonOutline.svelte";
  export let data;
  import "iconify-icon";
  let { course, active } = data;
  onMount(async () => {});

  $: course, active;;

</script>

<section class="w-full bg-primary h-fit p-4 text-white">
  <div class="space-y-4 w-1/8 mx-auto p-4">
    <h1 class="text-5xl">{course.title}</h1>
    <p>{course.description}</p>
  
    <div class="flex gap-2 text-white">
      <button class="btn btn-sm btn-outline btn-info gap-2"><iconify-icon icon="ri:bookmark-line" /> Bookmark Course</button>
      <button class="btn btn-sm btn-outline btn-info gap-2"><iconify-icon icon="ri:booklet-line" /> Chapters</button>
      <button class="btn btn-sm btn-outline btn-info gap-2"><iconify-icon icon="ri:group-line" /> Students</button>
    </div>
  </div>
</section>

<section class="p-2">
  <div class="flex flex-col lg:flex-row gap-2">
    <div class="basis-2/5">
      <div class="card card-compact w-full bg-white shadow">
        <div class="card-body prose prose-sm">
          <h2 class="card-title">{course.title}</h2>
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
      <div class="flex justify-between items-center bg-base-200 w-full p-2 gap-2">
        <h3 class="text-xl font-bold">Course Chapters</h3>
        <div class="flex gap-2">
          <div class="badge badge-lg badge-outline gap-2">
            <iconify-icon icon="ri:booklet-line" />
            23
          </div>
          <div class="badge badge-lg badge-outline gap-2">
            <iconify-icon icon="ri:code-s-slash-line" />
            23
          </div>
          <div class="badge badge-lg badge-outline gap-2">
            <iconify-icon icon="ri:video-line" />
            23
          </div>
        </div>
      </div>
      <LessonOutline chapters={course.course_chapters} {course} {active} />
    </div>
  </div>


</section>