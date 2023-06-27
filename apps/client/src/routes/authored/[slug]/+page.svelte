<script>
  export let data;
  import { Card } from "svelte-ui";
  import { onMount } from "svelte";
  import "iconify-icon";
  let { course, user } = data;
  import { DELETE_COURSE } from "$lib/graphql/mutations/courses";
  import { mutation } from "svelte-apollo";

  const deleteCourse = mutation(DELETE_COURSE);

  async function handleCourseDeletion () {
    try {
      const result = await deleteCourse({
        variables: {
          id: course.id,
          creator: user.id
        }
      });
    } catch (error) {
      console.log(error);
    }
  }


  $: course;

</script>

<section class="p-4">
  <div
    class="h-fit basis-1/3 grow max-w-screen-sm md:max-w-[360px] lg:max-w-sm xl:max-w-lg"
  >
    <Card>
      <h2 class="card-title">{course.title}</h2>
      <p>{course.description}</p>
      <div class="card-actions justify-end gap-2">
        <button class="btn btn-sm btn-warning gap-2" on:click={handleCourseDeletion}><iconify-icon icon="ri:delete-bin-4-line"/> Delete Course</button>
      </div>
    </Card>
  </div>
</section>
