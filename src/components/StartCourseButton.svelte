<script>
// @ts-nocheck
  export let course_id
  export let slug
  export let status = "Unsubscribed"

  import { mutation } from "svelte-apollo";
  import { START_COURSE } from "$lib/mutations/courses";


  const startCourse = mutation(START_COURSE);

  async function handleStart() {
    try {
      const result = await startCourse({
        variables: {
          user_id: "a4f9150e-4619-4b18-807d-2f273b75c12f",
          course_id,
        },
      });

      if (result.data.insert_user_courses.affected_rows === 1) {
      console.log('Mutation successful!');
      //  Change the URL to the Svelte page
      window.location.href = `/courses/${slug}`;
    } else {
      console.log('Mutation failed');
    }

      
    } catch (error) {
      console.log(error);
      // TODO
    }
  }

  function handleContinue() {}
  function handleCompleted() {}

  const buttons = {
    Completed: {
      text: "Course Completed",
      style: "btn btn-success",
      logic: handleCompleted
    },
    Unsubscribed: {
      text: "Start Course",
      style: "btn btn-primary",
      logic: handleStart
    },
    Subscribed: {
      text: "Continue Course",
      style: "btn btn-secondary",
      logic: handleContinue
    }
  }
</script>

<button class={buttons[status].style} on:click|preventDefault={buttons[status].logic}>{buttons[status].text}</button>
