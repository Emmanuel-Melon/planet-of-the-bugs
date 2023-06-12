<script lang="ts">
  export let course: any;
  let title: string = course.title;
  let description: string = course.description;
  import { Card } from "svelte-ui";

  const complexity = [
    { id: 0, name: "Beginner" },
    { id: 1, name: "Intermediate" },
    { id: 2, name: "Advanced" },
  ];

  let index = 0;
  const changeComplexity = (id: number) => {
    index = id;
  };

  $: index, title, description;
</script>

<section class="space-y-4">
  <Card>
    <div class="card-body">
      <h2 class="card-title">Course Details</h2>
      <form>
        <div class="form-control w-full">
          <label class="label" for="title">
            <span class="label-text">Course Title:</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            class="input input-md input-bordered w-full"
            id="title"
            value={title}
          />
        </div>

        <div class="form-control w-full">
          <label class="label" for="description">
            <span class="label-text">Course Description</span>
          </label>
          <textarea
            placeholder="Type here"
            class="input input-md input-bordered w-full h-32"
            id="description"
            value={description}
          />
        </div>

        <div class="w-full space-y-4 lg:basis-1/2">
          <div class="flex flex-col">
            <label class="label" for="title">
              <span class="label-text">Course Difficulty</span>
            </label>
            <div class="flex justify-between">
              {#each complexity as { id, name }}
                <div class="form-control">
                  <label class="label cursor-pointer gap-2">
                    <input
                      type="radio"
                      name="radio-10"
                      class="radio checked:bg-red-500"
                      checked={id === index}
                      on:click={() => changeComplexity(id)}
                    />
                    <span class="label-text">{name}</span>
                  </label>
                </div>
              {/each}
            </div>
          </div>

          <div class="form-control w-full max-w-xs">
            <label class="label" for="cover">
              <span class="label-text">Course Cover Image</span>
            </label>
            <input
              type="file"
              accept=".jpg,.jpeg,.png"
              class="file-input file-input-bordered file-input-md w-full max-w-xs"
            />
          </div>
        </div>

        <div class="card-actions justify-end mt-2 py-2">
          <button class="btn btn-primary gap-2"
            ><iconify-icon icon="ri:check-line" /> Update Course Details</button
          >
        </div>
      </form>
    </div>
  </Card>

  <Card>
    <div class="card-body">
      <h3 class="card-title">Delete Course</h3>
      <p>
        This option will remove your course entirely from <span class="italic"
          >Planet Of The Bugs</span
        >. You’ll get a chance to confirm your choice.
      </p>
      <div class="card-actions justify-end">
        <button class="btn btn-md btn-error gap-2"
          ><iconify-icon icon="ri:delete-bin-7-line" /> Delete Course</button
        >
      </div>
    </div>
  </Card>
</section>

<!-- <select on:change={() => handleChange} class="select select-bordered w-full max-w-xs">
      <option disabled selected>Pick a chapter</option>
      {#each course?.course_chapters as chapter}
        <option>#{chapter.index} - {chapter.title}</option>
      {/each}
    </select> -->
