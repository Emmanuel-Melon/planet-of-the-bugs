<script>
  // @ts-nocheck
  export let course;

  import StartCourseButton from "$components/StartCourseButton.svelte";
    import "iconify-icon";
</script>

<div class="card w-96 bg-gray-100 shadow-lg">
  <div class="card-body">
    <div class="flex gap-4">
      <div class="avatar">
        <div
          class="w-16 rounded-full ring ring-accentring-offset-base-100 ring-offset-2"
        >
          <img
            src="https://res.cloudinary.com/dwacr3zpp/image/upload/v1682839084/Planet%20of%20The%20Bugs/Untitled_design_1.png"
            alt="course logo"
          />
        </div>
      </div>
      <div>
        <h3 class="card-title mb-2">
          <a class="link" href={`/courses/${course.slug}`}>{course.title}</a>
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
