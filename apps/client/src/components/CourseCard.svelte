<script>
  // @ts-nocheck
  export let course;
  export let userId;
  import StartCourseButton from "$components/StartCourseButton.svelte";
  import "iconify-icon";
  import { Card } from "svelte-ui";
</script>

<div class="grow">
  <Card img={course.cover} height="96">
    <div class="w-full flex justify-between items-center">
      <h2 class="card-title">
        <a class="link link-hover" href={`/courses/${course.slug}`}
          >{course.title}</a
        >
      </h2>
      <div class="flex gap-2 items-center">
        <div class="badge badge-sm py-2 badge-primary badge-outline gap-2">
          <iconify-icon icon="ri:bar-chart-2-line" />
          {course.complexity}
        </div>
      </div>
   
  </div>
  <div class="divider">Description</div>
  <p>{course.description}</p>
  <div class="card-actions items-center justify-start gap-2">

    <StartCourseButton {userId} course_id={course.id} slug={course.slug} />
    <button class="btn btn-sm btn-square btn-ghost"
    ><iconify-icon icon="ri:bookmark-line" height="25" width="25" /></button
  >
  </div>
</Card>
</div>
