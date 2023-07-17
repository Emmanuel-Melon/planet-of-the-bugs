<script lang="ts">
  import 'iconify-icon';
  export let courseId;
  export let chaptersLength;
  import { ADD_CHAPTER } from '$lib/graphql/mutations/courses';
  import { mutation } from 'svelte-apollo';
  import { Button, Modal } from 'svelte-ui';
  const addChapter = mutation(ADD_CHAPTER);

  let title = '';
  let description = '';

  function createSlug(str: string) {
    return str.toLowerCase().replace(/\s+/g, '_');
  }

  const handleSubmit = async () => {
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
      console.log('New chapter added successfully!');
      location.reload();
    } catch (error) {
      console.log(error);
    }
  };
</script>

<Modal
  CTA="Chapter"
  icon="ri:add-line"
  id="new-chapter"
  heading="Add New Chapter"
>
  <form>
    <div>
      <label for="title" class="label">
        <span class="label-text">Title</span>
      </label>
      <input
        id="title"
        type="text"
        bind:value={title}
        on:input={(event) => (title = event.target.value)}
        class="input input-bordered w-full max-w-lg bg-base-100"
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
        class="input input-bordered w-full max-w-lg bg-base-100"
        required
      />
    </div>

    <div class="modal-action flex justify-end">
      <Button
        CTA="Save Chapter"
        icon="ri:add-line"
        on:buttonClick={handleSubmit}
      />
    </div>
  </form>
</Modal>
