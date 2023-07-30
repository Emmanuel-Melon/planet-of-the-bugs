<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import 'iconify-icon';
  import { Button } from 'svelte-ui';
  import Modal from 'svelte-ui/components/Modal.svelte';
  export let chapterId: string;
  export let idx: number;
  export let lessonTypes: Array<string>;

  const dispatch = createEventDispatcher();

  function forward() {
    dispatch('buttonClick', {
      title,
      description,
      type,
      XP: xp,
      index: idx,
      chapter_id: chapterId,
    });
  }

  let title = '';
  let description = '';
  let type = '';
  let xp = 0;
</script>

<Modal CTA="lesson" icon="ri:add-line" heading="Add New Lesson" id="new-lesson">
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
    <div class="mb-3">
      <label for="description" class="label">
        <span class="label-text">Type</span>
      </label>
      <div class="flex justify-between">
        {#each lessonTypes as name}
          <div class="form-control">
            <label class="label cursor-pointer gap-2">
              <input
                id={name}
                type="radio"
                name="radio-10"
                class="radio checked:bg-red-500"
                checked
                on:change={() => (type = name)}
              />
              <span class="label-text">{name}</span>
            </label>
          </div>
        {/each}
      </div>
    </div>
    <div class="mb-3">
      <label for="description" class="label">
        <span class="label-text">XP</span>
      </label>
      <input
        id="xp"
        bind:value={xp}
        on:input={(event) => (xp = event.target.value)}
        class="input input-bordered w-full max-w-lg bg-base-100"
        required
      />
    </div>
    <div class="modal-action flex justify-start">
      <Button CTA="Add Lesson" icon="ri:add-line" on:buttonClick={forward} />
    </div>
  </form>
</Modal>
