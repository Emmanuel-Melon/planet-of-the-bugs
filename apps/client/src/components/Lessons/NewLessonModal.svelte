<script lang="ts">
  import 'iconify-icon';
  export let chapterId: string;
  export let idx: number;
  export let lessonTypes: Array<string>;
  export let handleSubmit: Function;

  let title = '';
  let description = '';
  let type = '';
  let xp = 0;
</script>

<!-- The button to open modal -->
<label for="lesson-modal" class="btn btn-sm btn-primary gap-2"
  ><iconify-icon icon="ri:add-line" /> Lesson</label
>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="lesson-modal" class="modal-toggle" />
<div class="modal">
  <div class="modal-box cursor-pointer relative">
    <label
      id="close"
      for="lesson-modal"
      class="modal-backdrop btn btn-sm btn-circle btn-ghost absolute top-2 right-2"
      ><iconify-icon icon="ri:close-line" /></label
    >
    <form
      on:submit={handleSubmit({
        title,
        description,
        index: idx,
        chapter_id: chapterId,
        type: type,
        XP: xp,
      })}
    >
      <div class="flex justify-between items-center">
        <h3 class="font-bold text-lg">Add New Lesson</h3>
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
          class="input input-bordered w-full max-w-lg bg-gray-100"
          required
        />
      </div>
      <div class="modal-action flex justify-end">
        <button class="btn btn-sm btn-primary gap-2">
          <iconify-icon icon="ri:add-line" />
          Add Lesson
        </button>
      </div>
    </form>
  </div>
</div>
