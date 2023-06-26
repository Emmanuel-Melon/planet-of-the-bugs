<script lang="ts">
  import 'iconify-icon';
  export let user;
  import { CREATE_COURSE } from '$lib/graphql/mutations/courses';
  import { mutation } from 'svelte-apollo';
  const createCourse = mutation(CREATE_COURSE);
  let slug = '';
  let title = '';
  let description = '';
  let complexity = 'Beginner';
  import 'iconify-icon';
  import Button from 'svelte-ui/components/Button.svelte';
  import Modal from 'svelte-ui/components/Modal.svelte';

  function createSlug(str: string) {
    return str.toLowerCase().replace(/\s+/g, '_');
  }

  const handleSubmit = async () => {
    try {
      const result = await createCourse({
        variables: {
          courseInput: {
            creator: user.id,
            slug: createSlug(title),
            title,
            description,
            complexity,
          },
        },
      });
    } catch (error) {}
  };
</script>

<Modal
  CTA="New Course"
  icon="ri:add-line"
  heading="Create New Course"
  id="new-course"
>
  <form>
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

    <select
      bind:value={complexity}
      class="select w-full max-w-lg bg-base-200"
      on:change={(e) => (complexity = event.target.value)}
    >
      <option disabled selected>Pick course complexity</option>
      <option>Beginner</option>
      <option>Intermediate</option>
      <option>Advanced</option>
    </select>

    <div class="modal-action">
      <Button
        CTA="Create Course"
        icon="ri:booklet-line"
        onClick={handleSubmit}
      />
    </div>
  </form>
</Modal>
