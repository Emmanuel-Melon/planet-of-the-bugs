<script>
  // @ts-nocheck
  export let course;
  import "iconify-icon";
</script>

<div class="card card-compact grow bg-base-100 shadow-md max-w-screen-sm md:max-w-[360px] lg:max-w-lg">
  <div class="card-body space-y-2">
    <div class="flex gap-4">
      <div class="w-full flex justify-between items-center">
        <h3 class="card-title">
          <a class="link link-hover" href={`/authored/${course.slug}`}
            >{course.title}</a
          >
        </h3>
        <div class="badge badge-accent gap-2">
          <iconify-icon icon="ri:bar-chart-2-line" />
          {course.complexity}
        </div>
      </div>
    </div>
    <div class="divider">Description</div>
    <p>{course.description}</p>
    <div class="card-actions justify-end">
      <div class="flex gap-2">
        <a href={`/authored/${course.slug}/analytics`} class="btn btn-sm btn-outline gap-2">
          <iconify-icon icon="ri:bubble-chart-line" /> Analytics</a
        >
        <a href={`/authored/${course.slug}/edit`} class="btn btn-sm btn-primary gap-2">
          <iconify-icon icon="ri:settings-3-line" /> Manage Course</a
        >
      </div>
    </div>
  </div>
</div>
