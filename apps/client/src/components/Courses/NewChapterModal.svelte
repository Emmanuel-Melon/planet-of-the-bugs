<script lang="ts">
    import "iconify-icon";
    export let course;
    import { ADD_CHAPTER } from "$lib/graphql/mutations/courses";
    import { mutation } from "svelte-apollo";
    const addChapter = mutation(ADD_CHAPTER);

    let title = "";
    let description = "";
  
    function createSlug(str: string) {
      return str.toLowerCase().replace(/\s+/g, "_");
    }
  
    const handleSubmit = async () => {
        console.log("yoooo");
      try {
        const result = await addChapter({
          variables: {
            chapterInput: {
              title,
              description,
              index: 2,
              course_id: course.id
            },
          },
        });
      } catch (error) {}
    };
  </script>
  
  <div>
    <!-- The button to open modal -->
    <label for="my-modal" class="btn btn-sm btn-primary gap-2"
      ><iconify-icon icon="ri:add-line" /> New Chapter</label
    >
  
    <!-- Put this part before </body> tag -->
    <input type="checkbox" id="my-modal" class="modal-toggle" />
    <label for="my-modal" class="modal cursor-pointer">
      <div class="modal-box bg-gray-100 object-fill shadow-lg">
        <div class="flex justify-between items-center">
            <h3 class="font-bold text-lg">Add New Chapter</h3>
            <button class="btn btn-sm btn-ghost btn-square"><iconify-icon icon="ri:close-line" /></button>
        </div>
        <div>
          <label for="title" class="label">
            <span class="label-text">Title</span>
          </label>
          <input
            id="title"
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
        <div class="modal-action">
          <button for="my-modal" class="btn btn-sm btn-primary gap-2" on:click={handleSubmit}
            >
            <iconify-icon icon="ri:add-line" />
            Save Chapter
            </button
          >
        </div>
      </div>
    </label>
  </div>
  