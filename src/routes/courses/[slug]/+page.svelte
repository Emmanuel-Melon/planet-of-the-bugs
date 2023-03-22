<script>

  import { onMount } from "svelte";

  import { query } from "svelte-apollo";
  import { FETCH_COURSE_BY_SLUG, FETCH_COURSE_BY_COMPOSITE } from "$lib/queries/courses";
  import StartCourseButton from "../../../components/StartCourseButton.svelte";
  
  export let data;
  let  course  = data.course[0];


  const activeCourse = query(FETCH_COURSE_BY_COMPOSITE, { variables: { user_id: "a4f9150e-4619-4b18-807d-2f273b75c12f", course_id: course.id } });

  onMount(async () => {
    
  });

  $: course;

</script>


<div>
    <div> 
      <h1>{course.name}</h1>
      <p>{course.description}</p>
      <StartCourseButton cta="Continue" course_id={course.id} user_id="a4f9150e-4619-4b18-807d-2f273b75c12f" />
    </div>
</div>


