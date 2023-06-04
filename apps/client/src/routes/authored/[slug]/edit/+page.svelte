<script>
  export let data;
  let { slug, course } = data;
  import LessonCreator from "$components/Lessons/LessonCreator.svelte";
  import LessonCreatorPreview from "$components/Lessons/LessonCreatorPreview.svelte";
  import Tabs from "$components/Tabs.svelte";
  const items = [
    {
      label: "Edit",
      value: 1,
      component: LessonCreator,
      icon: "ri:edit-2-line",
    },
    {
      label: "Preview",
      value: 2,
      component: LessonCreatorPreview,
      icon: "ri:artboard-line",
    },
  ];

  $: course
</script>

<div class="card bg-base-100 shadow-md mb-4">
  <div class="card-body">
    <div class="flex justify-between items-center">
      <h2 class="card-title">{course.title}</h2>
      <div class="flex gap-2">
        <button class="btn btn-sm btn-outline gap-2">
          <iconify-icon icon="ri:edit-2-line" />
          New Lesson</button
        >
        <button class="btn btn-sm primary gap-2">
          <iconify-icon icon="ri:edit-2-line" />
          New Chapter</button
        >
      </div>
    </div>
  </div>
</div>
<section class="flex gap-2">
  <div class="card card-compact basis-1/4 bg-base-200 space-y-4">
    <div class="card-body">
      <h2 class="card-title">Course Options</h2>
      <div class="form-control w-full max-w-xs">
        <label class="label" for="title">
          <span class="label-text">Lesson Title</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          class="input input-md input-bordered w-full max-w-xs"
          id="title"
        />
      </div>
      <div class="flex justify-between">
        <div class="form-control">
          <label class="label cursor-pointer gap-2">
            <span class="label-text">Beginner</span>
            <input
              type="radio"
              name="radio-10"
              class="radio checked:bg-red-500"
              checked
            />
          </label>
        </div>
        <div class="form-control">
          <label class="label cursor-pointer gap-2">
            <span class="label-text">Medium</span>
            <input
              type="radio"
              name="radio-10"
              class="radio checked:bg-blue-500"
              checked
            />
          </label>
        </div>
        <div class="form-control">
          <label class="label cursor-pointer gap-2">
            <span class="label-text">Hard</span>
            <input
              type="radio"
              name="radio-10"
              class="radio checked:bg-blue-500"
              checked
            />
          </label>
        </div>
      </div>
      <select class="select select-bordered w-full max-w-xs">
        <option disabled selected>Pick a chapter</option>
        <option>Homer</option>
        <option>Marge</option>
        <option>Bart</option>
        <option>Lisa</option>
        <option>Maggie</option>
      </select>
      <div class="card-actions justify-end">
        <button class="btn btn-sm btn-outline gap-2">
          <iconify-icon icon="ri:edit-2-line" />
          Draft</button
        >
        <button class="btn btn-sm btn-primary gap-2">
          <iconify-icon icon="ri:check-line" />
          Publish</button
        >
      </div>
    </div>
  </div>
  <div class="basis-3/4">
    <Tabs {items} />
  </div>
</section>
