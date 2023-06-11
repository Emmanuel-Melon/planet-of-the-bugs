<script lang="ts">
  import 'iconify-icon';
  export let courseId;
  export let chaptersLength;
  import { ADD_CHAPTER } from '$lib/graphql/mutations/courses';
  import { mutation } from 'svelte-apollo';
  const addChapter = mutation(ADD_CHAPTER);

  let title = '';
  let description = '';

  function createSlug(str: string) {
    return str.toLowerCase().replace(/\s+/g, '_');
  }

  const handleSubmit = async () => {
    console.log('yoooo');
    try {
      const result = await addChapter({
        variables: {
          chapterInput: {
            title,
            description,
            index: chaptersLength + 1,
            course_id: courseId,
          },
        },
      });
      console.log('New lesson added successfully!');
      document.getElementById('close')?.click();
    } catch (error) {
      console.log(error);
    }
  };
</script>

<!-- The button to open modal -->
<label for="chapter-modal" class="btn btn-sm btn-primary gap-2"
  ><iconify-icon icon="ri:add-line" /> Chapter</label
>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="chapter-modal" class="modal-toggle" />
<div class="modal">
  <div class="modal-box cursor-pointer relative">
    <label
      id="close"
      for="chapter-modal"
      class="modal-backdrop btn btn-sm btn-circle btn-ghost absolute top-2 right-2"
      ><iconify-icon icon="ri:close-line" /></label
    >
    <form on:submit={handleSubmit}>
      <div class="flex justify-between items-center">
        <h3 class="font-bold text-lg">Add New Chapter</h3>
        <!-- <button class="btn btn-sm btn-ghost btn-square"><iconify-icon icon="ri:close-line" /></button> -->
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

      <div class="modal-action flex justify-end">
        <button class="btn btn-sm btn-primary gap-2">
          <iconify-icon icon="ri:add-line" />
          Add Chapter
        </button>
      </div>
    </form>
  </div>
</div>
