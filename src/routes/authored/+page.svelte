<script lang="ts">
  // @ts-nocheck
  import { query, mutation } from "svelte-apollo";
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import { CREATE_COURSE } from "$lib/mutations/courses";
  import { FETCH_AUTHORED_COURSES } from "$lib/queries/courses";
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
      console.log(error);
    }
  };


  const items = [
    {
      label: "Overview",
      value: 1,
      content: ""
    },
    {
      label: "Exercises",
      value: 2,
      content: ""
    }
  ]
</script>

<main>
  <Tabs {items} />
  <section class="flex gap-2">
    <ContributionsStats {user} />
    <div>
      <div class="flex justify-between gap-2 items-center">
        <div>
          <h3>My Courses</h3>
          <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
        </div>
        <!-- The button to open modal -->
        <label for="my-modal" class="btn gap-2 mb-2"
          ><iconify-icon icon="heroicons:cog-8-tooth-solid" /> New Course</label
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
      <div class="flex gap-4 flex-wrap">
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
</main>
