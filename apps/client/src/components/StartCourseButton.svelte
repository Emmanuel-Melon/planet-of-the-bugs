<script>
  // @ts-nocheck
  export let course_id;
  export let slug;
  export let status = "Unsubscribed";
  export let userId;

  import { mutation } from "svelte-apollo";
  import { START_COURSE } from "$lib/graphql/mutations/courses";
  import "iconify-icon";

  const startCourse = mutation(START_COURSE);

  async function handleStart() {
    try {
      const result = await startCourse({
        variables: {
          user_id: userId,
          course_id,
        },
      });

      if (result.data.insert_user_courses.affected_rows === 1) {
        console.log("Mutation successful!");
        //  Change the URL to the Svelte page
        window.location.href = `/courses/${slug}`;
      } else {
        console.log("Mutation failed");
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
      logic: handleCompleted,
    },
    Unsubscribed: {
      text: "Start Course",
      style: "btn btn-primary",
      logic: handleStart,
    },
    Subscribed: {
      text: "Continue Course",
      style: "btn btn-primary",
      logic: handleContinue,
    },
  };
</script>

<button
  class={` btn-sm gap-2 ${buttons[status].style}` }
  on:click|preventDefault={buttons[status].logic}
  ><iconify-icon icon="ri:add-circle-line" /> {buttons[status].text}</button
>
