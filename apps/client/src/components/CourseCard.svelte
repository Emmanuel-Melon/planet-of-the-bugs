<script>
  // @ts-nocheck
  export let course;
  import StartCourseButton from "$components/StartCourseButton.svelte";
    import "iconify-icon";
</script>

<div class="card basis-1/3 grow bg-white shadow-md max-w-screen-sm md:max-w-[360px] lg:max-w-sm xl:max-w-lg">
  <div class="card-body space-y-2">
    <div class="flex gap-4">
      <div class="w-full flex justify-between items-center">
        <h3 class="card-title">
          <a class="link link-hover" href={`/courses/${course.slug}`}>{course.title}</a>
        </h3>
        <div class="badge badge-lg badge-accent gap-2">
          {course.complexity}
          <iconify-icon icon="heroicons:chart-bar" />
        </div>
      </div>
    </div>
    <div class="divider">Description</div>
    <p>{course.description}</p>
    <div class="card-actions justify-end">
      <StartCourseButton course_id={course.id} slug={course.slug} />
    </div>
  </div>
</div>
