<script>
  // @ts-nocheck
  export let course_id;
  export let slug;
  export let status = 'Unsubscribed';
  export let userId;

  import { mutation } from 'svelte-apollo';
  import { START_COURSE } from '$lib/graphql/mutations/courses';
  import 'iconify-icon';
  import Button from 'svelte-ui/components/Button.svelte';

  const startCourse = mutation(START_COURSE);

  async function handleStart() {
    buttons[status].isProcessing = true;
    try {
      const result = await startCourse({
        variables: {
          user_id: userId,
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
      buttons[status].isProcessing = false;
    } catch (error) {
      buttons[status].isProcessing = false;

      console.log(error);
      // TODO
    }
  }

  function handleContinue() {}
  function handleCompleted() {}

  $: buttons = {
    Completed: {
      CTA: 'Course Completed',
      style: 'btn btn-success',
      isProcessing: false,
      logic: handleCompleted,
    },
    Unsubscribed: {
      CTA: 'Start Course',
      style: 'btn btn-primary',
      isProcessing: false,
      logic: handleStart,
    },
    Subscribed: {
      CTA: 'Continue Course',
      style: 'btn btn-primary',
      isProcessing: false,
      logic: handleContinue,
    },
  };
</script>

<Button
  CTA={buttons[status].CTA}
  icon="ri:add-circle-line"
  isProcessing={buttons[status].isProcessing}
  on:buttonClick={buttons[status].logic}
/>
