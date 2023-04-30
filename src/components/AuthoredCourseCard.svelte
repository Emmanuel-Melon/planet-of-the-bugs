<script>
    // @ts-nocheck
    export let course;
    import "iconify-icon";
  </script>
  
  <div class="card w-96 bg-gray-100 shadow-lg">
    <div class="card-body">
      <h3 class="card-title">
        <a class="link" href={`/courses/authored/${course.slug}`}>{course.title}</a>
      </h3>
      <div class="badge badge-accent gap-2">
        <iconify-icon icon="heroicons:star" />
        {course.complexity}
      </div>
      <p>{course.description}</p>
    </div>
  </div>
  

