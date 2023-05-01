<script>
  // @ts-nocheck
  export let course;
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
        <h3 class="card-title">
          <a class="link" href={`/courses/authored/${course.slug}`}
            >{course.title}</a
          >
        </h3>
        <div class="badge badge-accent mt-2 gap-2">
          <iconify-icon icon="heroicons:star" />
          {course.complexity}
        </div>
        <p>{course.description}</p>
      </div>
    </div>
    <div class="divider">Description</div>
    <p>{course.description}</p>
    <div class="card-actions justify-center mt-4">
      <div class="flex gap-4">
        <button class="btn btn-sm btn-primary gap-2">
          <iconify-icon icon="heroicons:cog-8-tooth-solid" /> Manage Course</button
        >
        <button class="btn btn-sm btn-secondary gap-2">
          <iconify-icon icon="heroicons:chart-pie-20-solid" /> Analytics</button
        >
      </div>
    </div>
  </div>
</div>
