<script>
  export let data;
  import { onMount } from "svelte";
  import "iconify-icon";
  let { course, files } = data;
  import { sdk, server } from "$lib/appwrite/appwriteClient";
  import { DELETE_COURSE } from "$lib/graphql/mutations/courses";
  import apolloClient from "$lib/graphql/apolloClient";
  import { mutation } from "svelte-apollo";
  export let userId = "fae379cf-4387-4dac-a5af-bf092734a464";

  const deleteCourse = mutation(DELETE_COURSE);

  async function handleCourseDeletion () {
    try {
      const result = await deleteCourse({
        variables: {
          id: course.id,
          creator: userId
        }
      });
      console.log(result);
    } catch (error) {
      console.log("oh no");
      console.log(error);
    }
  }


  $: course;
  $: files;

  onMount(async () => {
    console.log(files);
  });
</script>

<section>
  <div
    class="card h-fit basis-1/3 grow bg-white shadow-md max-w-screen-sm md:max-w-[360px] lg:max-w-sm xl:max-w-lg"
  >
    <div class="card-body space-y-2">
      <h2 class="card-title">{course.title}</h2>
      <p>{course.description}</p>
      <div class="card-actions justify-end gap-2">
        <button class="btn btn-sm btn-warning gap-2" on:click={handleCourseDeletion}><iconify-icon icon="ri:delete-bin-4-line"/> Delete Course</button>
      </div>
    </div>
  </div>
</section>
