<script>

  import { onMount } from "svelte";
  import StartCourseButton from "../../../components/StartCourseButton.svelte";
  
  export let data;
  let  {course, active}  = data;


  onMount(async () => {
    
  });

  $: course, active;

</script>


<div>
    <div> 
      <h1>{course.name}</h1>
      <p>{course.description}</p>
      <StartCourseButton status={active?.status === "Subscribed" ? true : false} course_id={course.id} slug={course.slug} />
    </div>
</div>


