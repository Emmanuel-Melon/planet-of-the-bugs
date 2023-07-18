<script>
  // @ts-nocheck
  export let course_id;
  export let slug;
  export let status = 'Unsubscribed';
  export let userId;

  import { goto } from '$app/navigation';
  import { mutation } from 'svelte-apollo';
  import { START_COURSE } from '$lib/graphql/mutations/courses';
  import { Button } from 'svelte-ui/';
  import 'iconify-icon';

  const startCourse = mutation(START_COURSE);

  async function handleStart() {
    buttons[status].requestState = 'processing';
    try {
      const result = await startCourse({
        variables: {
          user_id: userId,
          course_id,
        },
      });

      if (result.data.insert_user_courses.affected_rows === 1) {
        console.log('Mutation successful!');
        goto(`/courses/${slug}`, { replaceState: true });
      } else {
        console.log('Mutation failed');
      }
      buttons[status].requestState = 'completed';
    } catch (error) {
      buttons[status].requestState = 'failed';

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
      requestState: 'idle',
      logic: handleCompleted,
    },
    Unsubscribed: {
      CTA: 'Start Course',
      style: 'btn btn-primary',
      requestState: 'idle',
      logic: handleStart,
    },
    Subscribed: {
      CTA: 'Continue Course',
      style: 'btn btn-primary',
      requestState: 'idle',
      logic: handleContinue,
    },
  };
</script>

<Button
  CTA={buttons[status].CTA}
  icon="ri:add-circle-line"
  requestState={buttons[status].requestState}
  on:buttonClick={buttons[status].logic}
/>
