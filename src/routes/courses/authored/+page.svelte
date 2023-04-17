<script>
  // @ts-nocheck
  import { onMount } from "svelte";
  import { FETCH_AUTHORED_COURSES } from "$lib/queries/courses";
  import { CREATE_COURSE } from "$lib/mutations/courses";
  import { query, mutation } from "svelte-apollo";
  import AuthoredCourseCard from "$components/AuthoredCourseCard.svelte";

  const courses = query(FETCH_AUTHORED_COURSES, {
    variables: {
      creator: "0c6cd039-b8ed-4d8d-bdca-1173ad79b028",
    },
  });

  onMount(async () => {
    courses.refetch();
  });
  $: courses.refetch();

  const createCourse = mutation(CREATE_COURSE);
  let slug = "Hey";
  let title = "Hey";
  let description = "Hey";
  let creator = "0c6cd039-b8ed-4d8d-bdca-1173ad79b028";

  const handleSubmit = async () => {
    try {
      const result = await createCourse({
        variables: {
          courseInput: {
            slug,
            title,
            description,
            creator,
          },
        },
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
</script>

<main>
  <section>
    <div class="flex justify-between">
      <h3>My Courses</h3>
      <!-- The button to open modal -->
      <label for="my-modal" class="btn">New Course</label>

      <!-- Put this part before </body> tag -->
      <input type="checkbox" id="my-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Create New Course</h3>
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div class="modal-action">
            <label for="my-modal" class="btn" on:click={handleSubmit}
              >Yay!</label
            >
          </div>
        </div>
      </div>
    </div>
    <div class="flex gap-4 flex-wrap">
      {#if $courses.data}
        {#each $courses.data.courses as course}
          <AuthoredCourseCard {course} />
        {/each}
      {:else}
        <p>Loading...</p>
      {/if}
    </div>
  </section>
</main>
