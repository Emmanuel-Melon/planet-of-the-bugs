<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { Button, Modal } from 'svelte-ui';
  import 'iconify-icon';
  import type { RequestState } from 'svelte-ui/Types';
  export let requestState: RequestState = 'idle';

  let title = '';
  let description = '';

  const dispatch = createEventDispatcher();
  const forward = () => {
    dispatch('buttonClick', {
      title,
      description,
    });
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

    <div class="modal-action flex justify-start">
      <Button
        CTA="Save Chapter"
        icon="ri:add-line"
        {requestState}
        on:buttonClick={forward}
      />
    </div>
  </form>
</Modal>
