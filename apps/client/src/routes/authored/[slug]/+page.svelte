<script>
    export let data;
    let { slug, course } = data;

  
    $: course
  </script>


    <section>

        <h1>{course.title}</h1>
        <p>{course.description}</p>
    </section>
