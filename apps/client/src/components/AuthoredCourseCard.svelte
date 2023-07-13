<script>
  // @ts-nocheck
  export let course;
  import "iconify-icon";
  import { Card } from "svelte-ui";
</script>

<div class="grow bg-base-100 max-w-screen-sm md:max-w-[360px] lg:max-w-lg">
  <Card img="https://res.cloudinary.com/dwacr3zpp/image/upload/v1657997898/inspirers/images/abstract-chess.svg">
    <div class="flex gap-4">
      <div class="w-full flex justify-between items-center">
        <h2 class="card-title">
          <a class="link link-hover" href={`/authored/${course.slug}`}
            >{course.title}</a
          >
        </h2>
        <div class="badge badge-lg badge-accent gap-2">
          <iconify-icon icon="ri:bar-chart-2-line" />
          {course.complexity}
        </div>
      </div>
    </div>
    <div class="divider">Description</div>
    <p>{course.description}</p>
    <div class="card-actions justify-start">
      <div class="flex gap-2">
        <a href={`/authored/${course.slug}/analytics`} class="btn btn-sm btn-outline gap-2">
          <iconify-icon icon="ri:bubble-chart-line" /> Analytics</a
        >
        <a href={`/authored/${course.slug}/edit`} class="btn btn-sm btn-primary gap-2">
          <iconify-icon icon="ri:settings-3-line" /> Manage Course</a
        >
      </div>
    </div>
  </Card>
</div>
