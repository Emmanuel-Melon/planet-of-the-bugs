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
  let slug = "";
  let title = "";
  let description = "";
  let creator = "0c6cd039-b8ed-4d8d-bdca-1173ad79b028";

  const handleSubmit = async () => {
    try {
      const result = await createCourse({
        variables: {
          courseInput: {
            slug: title.toLowerCase(),
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
        <div class="modal-box bg-gray-100 shadow-lg">
          <h3 class="font-bold text-lg">Create New Course</h3>
          <div>
            <label for="username" class="label">
              <span class="label-text">Title</span>
            </label>
            <input
              id="username"
              type="text"
              bind:value={title}
              on:input={(event) => (title = event.target.value)}
              class="input input-bordered w-full max-w-lg bg-gray-100"
              required
            />
          </div>
          <div class="mb-3">
            <label for="description" class="label">
              <span class="label-text">Description</span>
            </label>
            <input
              id="description"
              type="textarea"
              bind:value={description}
              on:input={(event) => (description = event.target.value)}
              class="input input-bordered w-full max-w-lg bg-gray-100"
              required
            />
          </div>
          <div>
            <select class="select w-full max-w-lg bg-secondary">
              <option disabled selected>Pick course complexity</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
          <div class="modal-action">
            <label for="my-modal" class="btn" on:click={handleSubmit}
              >Submit Course</label
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
