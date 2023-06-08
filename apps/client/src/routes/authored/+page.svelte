<script lang="ts">
  // @ts-nocheck
  import { query, mutation } from "svelte-apollo";
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import { CREATE_COURSE } from "$lib/graphql/mutations/courses";
  import { FETCH_AUTHORED_COURSES } from "$lib/graphql/queries/courses";
  import AuthoredCourseCard from "$components/AuthoredCourseCard.svelte";
  import ContributionsStats from "$components/User/ContributionsStats.svelte";
  import "iconify-icon";
  import Tabs from "$components/Tabs.svelte";

  const {
    data: { session, github_user, user },
  } = $page;

  const courses = query(FETCH_AUTHORED_COURSES, {
    variables: {
      creator: user.id,
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
  let creator = user.id;
  let complexity = "Beginner";

  function createSlug(str) {
    return str.toLowerCase().replace(/\s+/g, "_");
  }

  const handleSubmit = async () => {
    try {
      if ($page.data.session) {
        const result = await createCourse({
          variables: {
            courseInput: {
              creator: user.id,
              slug: createSlug(title),
              title,
              description,
              creator,
              complexity,
            },
          },
        });
      }
    } catch (error) {

    }
  };
</script>
 
  <section class="flex gap-2">
    <div class="w-full space-y-4">
      <div class="flex justify-between gap-2 items-center">
        <h3 class="text-xl">My Courses</h3>
        <!-- The button to open modal -->
        <label for="my-modal" class="btn btn-sm btn-primary gap-2"
          ><iconify-icon icon="ri:add-line" /> New Course</label
        >

        <!-- Put this part before </body> tag -->
        <input type="checkbox" id="my-modal" class="modal-toggle" />
        <label for="my-modal" class="modal cursor-pointer">
          <div class="modal-box bg-gray-100 object-fill shadow-lg">
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
              <select
                bind:value={complexity}
                class="select w-full max-w-lg bg-accent"
                on:change={(e) => (complexity = event.target.value)}
              >
                <option disabled selected>Pick course complexity</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>
            <div class="modal-action">
              <button
                for="my-modal"
                class="btn btn-primary"
                on:click={handleSubmit}>Submit Course</button
              >
            </div>
          </div>
        </label>
      </div>
      <div class="flex gap-1 flex-wrap">
        {#if $courses.data}
          {#each $courses.data.courses as course}
            <AuthoredCourseCard {course} />
          {/each}
        {:else}
          <p>Loading...</p>
        {/if}
      </div>
    </div>
  </section>
