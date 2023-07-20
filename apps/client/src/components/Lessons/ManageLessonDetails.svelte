<script lang="ts">
  import NewLessonModal from '../Modals/NewLessonModal.svelte';
  import LessonCreator from '$components/Lessons/LessonCreator.svelte';
  import LessonCreatorPreview from '$components/Lessons/LessonCreatorPreview.svelte';
  import Tabs from '$components/ProfileTabs.svelte';
  import { ADD_LESSON } from '$lib/graphql/mutations/courses';
  import { mutation } from 'svelte-apollo';
  const addLesson = mutation(ADD_LESSON);
  import { Button, Card } from 'svelte-ui';

  export let courseId: string;
  export let chapters: Array<Object>;

  let isChapterSelected: boolean = false;
  let isLessonSelected: boolean = false;
  let selectedChapter: number = 0;
  let selectedLesson: number;
  const lessonTypes = ['Text', 'Video', 'Interactive'];

  let lessons: Array<Object> = chapters[selectedChapter].lessons;

  const items = [
    {
      label: 'Edit',
      value: 1,
      component: LessonCreator,
      icon: 'ri:edit-2-line',
    },
    {
      label: 'Preview',
      value: 2,
      component: LessonCreatorPreview,
      icon: 'ri:artboard-line',
    },
  ];

  const handleChapterChange = (event) => {
    isChapterSelected = true;
    selectedChapter = event.target.selectedIndex - 1;
  };

  const handleLessonChange = (event) => {
    isLessonSelected = true;
    selectedLesson = event.target.selectedIndex - 1;
  };

  const handleSubmit = async (event) => {
    try {
      const result = await addLesson({
        variables: {
          lessonInput: event.detail,
        },
      });
      console.log('New lesson added successfully!');
      lessons = [...lessons, result.data?.insert_lessons_one];
      document.getElementById('close')?.click();
    } catch (error) {
      console.log(error);
    }
  };

  $: isChapterSelected,
    selectedChapter,
    isLessonSelected,
    selectedLesson,
    lessons;

  const publishLessonContent = () => {};
</script>

<div class="flex flex-col space-y-4 w-full">
  <div class="card card-compact shadow space-y-4 h-max">
    <div class="card-body space-y-2">
      <div class="flex justify-between item-center w-full">
        <h2 class="card-title">Lesson Details</h2>

        {#if isChapterSelected}
          <NewLessonModal
            chapterId={chapters[selectedChapter].id}
            idx={lessons.length + 1}
            {lessonTypes}
            on:buttonClick={handleSubmit}
          />
        {/if}
      </div>

      <select
        on:change={handleChapterChange}
        class="select select-bordered w-full"
      >
        <option disabled selected>Pick a chapter</option>
        {#each chapters as chapter}
          <option>{chapter.title}</option>
        {/each}
      </select>

      <select
        on:change={handleLessonChange}
        class="select select-bordered w-full"
        disabled={!isChapterSelected}
      >
        <option disabled selected>Pick a lesson</option>
        {#each lessons as lesson}
          <option>{lesson.title}</option>
        {/each}
      </select>
    </div>
  </div>

  {#if isChapterSelected && isLessonSelected}
    <Card>
      <div class="card-body space-y-2">
        <form class="w-full">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="basis-2/5 form-control w-full">
              <label class="label" for="index">
                <span class="label-text">Lesson Index:</span>
              </label>
              <input
                type="number"
                disabled
                bind:value={lessons[selectedLesson].index}
                class="input input-md input-bordered w-full"
                id="lessonIndex"
              />
            </div>
            <div class="basis-2/5 form-control w-full">
              <label class="label" for="XP">
                <span class="label-text">Lesson XP:</span>
              </label>
              <input
                type="number"
                bind:value={lessons[selectedLesson].XP}
                class="input input-md input-bordered w-full"
                id="lessonXP"
              />
            </div>
          </div>
          <div class="form-control w-full">
            <label class="label" for="title">
              <span class="label-text">Chapter Title:</span>
            </label>
            <input
              type="text"
              bind:value={lessons[selectedLesson].title}
              placeholder="Type here"
              class="input input-md input-bordered w-full"
              id="lessonTitle"
            />
          </div>
          <div class="form-control w-full">
            <label class="label" for="title">
              <span class="label-text">Chapter Description</span>
            </label>
            <textarea
              bind:value={lessons[selectedLesson].description}
              placeholder="Type here"
              class="input input-md input-bordered w-full h-32"
              id="lessonDescription"
            />
          </div>

          <div class="flex flex-col space-y-2">
            <label class="label" for="title">
              <span class="label-text">Lesson Type</span>
            </label>
            <div class="flex justify-between">
              {#each lessonTypes as type}
                <div class="form-control">
                  <label class="label cursor-pointer gap-2">
                    <input
                      id={type}
                      type="radio"
                      name="radio-10"
                      class="radio checked:bg-red-500"
                      checked={lessons[selectedLesson].type === type}
                    />
                    <span class="label-text">{type}</span>
                  </label>
                </div>
              {/each}
            </div>
          </div>

          <div class="card-actions justify-end mt-2 py-2">
            <Button
              CTA="Update Lesson Details"
              icon="ri:check-line"
              on:buttonClick={() => {}}
            />
          </div>
        </form>
      </div>
    </Card>

    <Card>
      <div class="card-body">
        <h2>Lesson Content</h2>

        <div class="basis-3/4 space-y-2">
          <Tabs {items} />
          <div class="card-actions justify-end">
            <Button
              CTA="Draft"
              icon="ri:edit-2-line"
              ButtonType="outline"
              on:buttonClick={() => {}}
            />
            <Button
              CTA="Publish"
              icon="ri:check-line"
              on:buttonClick={publishLessonContent}
            />
          </div>
        </div>
      </div>
    </Card>

    <Card>
      <div class="card-body">
        <h3 class="card-title">Delete Lesson</h3>
        <p>
          This option will remove the currently selected lesson <span
            class="italic"
            >(#{selectedLesson + 1} - {lessons[selectedLesson].title})</span
          >
          from this chapter
          <span class="italic">({chapters[selectedChapter].title})</span>.
          You’ll get a chance to confirm your choice.
        </p>
        <div class="card-actions justify-end">
          <Button
            CTA="Delete Lesson"
            icon="ri:delete-bin-7-line"
            state="error"
            on:buttonClick={() => {}}
          />
        </div>
      </div>
    </Card>
  {:else}
    <div class="card shadow justify-center items-center min-h-16">
      Please Select a Chapter to edit
    </div>
  {/if}
</div>
