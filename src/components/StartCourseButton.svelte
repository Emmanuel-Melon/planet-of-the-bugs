<script>
  import { mutation } from "svelte-apollo";
  import { START_COURSE } from "$lib/mutations/courses";

  const startCourse = mutation(START_COURSE);

  async function handleClick() {
    try {
      const result = await startCourse({
        variables: {
          user_id: "a4f9150e-4619-4b18-807d-2f273b75c12f",
          course_id: "6477f941-f072-4f1e-95da-b1d02a81ae6f",
        },
      });
      console.log(result);
    } catch (error) {
      console.log(error);
      // TODO
    }
  }
</script>

<button class="btn" on:click={handleClick}>Start Course</button>
