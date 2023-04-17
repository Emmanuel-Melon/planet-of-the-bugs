<script>
    // @ts-nocheck
    export let course;

  </script>
  
  <div class="card w-96 bg-base-100 shadow-xl">
    <div class="card-body">
      <h3 class="card-title">
        <a class="link" href={`/courses/authored/${course.slug}`}>{course.title}</a>
      </h3>
      <p>Complexity: {course.complexity}</p>
      <p>{course.description}</p>
    </div>
  </div>
  