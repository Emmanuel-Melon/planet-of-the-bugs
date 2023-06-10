<script>
  // @ts-nocheck
  export let course;
  export let userId;
  import StartCourseButton from "$components/StartCourseButton.svelte";
  import "iconify-icon";
  const src =
    "https://cloud.appwrite.io/v1/storage/buckets/64693e8a74abbc579060/files/6469466101af50b3e087/view?project=646376283eca78018cd9&mode=admin";
</script>

<div
  class="card h-96 basis-1/3 grow bg-white shadow max-w-screen-sm md:max-w-[360px] lg:max-w-sm xl:max-w-lg"
>
  <figure class="h-full">
    <img
      class="shadow-xl border-4 border-primary border-double"
      src={course?.cover || src}
      alt={course.title}
    />
  </figure>
  <div class="card-body space-y-2">
    <div class="flex gap-3">
      <div class="w-full flex justify-between items-center">
        <h2 class="card-title">
          <a class="link link-hover" href={`/courses/${course.slug}`}
            >{course.title}</a
          >
        </h2>
        <div class="flex gap-2 items-center">
          <div class="badge badge-lg badge-accent gap-2">
            <iconify-icon icon="ri:bar-chart-2-line" />
            {course.complexity}
          </div>
        </div>
      </div>
    </div>
    <div class="divider">Description</div>
    <p>{course.description}</p>
    <div class="card-actions justify-end gap-2">
      <button class="btn btn-sm btn-square btn-ghost"
        ><iconify-icon icon="ri:bookmark-line" /></button
      >
      <StartCourseButton {userId} course_id={course.id} slug={course.slug} />
    </div>
  </div>
</div>
