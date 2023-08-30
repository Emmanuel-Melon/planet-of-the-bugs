<script lang="ts">
  import NewLessonModal from '../Modals/NewLessonModal.svelte';
  import LessonCreator from '$components/Lessons/LessonCreator.svelte';
  import LessonCreatorPreview from '$components/Lessons/LessonCreatorPreview.svelte';
  import Tabs from '$components/ProfileTabs.svelte';
  import { ADD_LESSON } from '$lib/graphql/mutations/courses';
  import { mutation } from 'svelte-apollo';
  import { Button, Card, FormControl, Input } from 'svelte-ui';
  import type { ButtonProps } from 'svelte-ui/Types';
  import { enhance } from '$app/forms';
  import toast, { Toaster } from 'svelte-french-toast';

  const addLesson = mutation(ADD_LESSON);

  export let courseId: string;
  export let chapters: Array<Object>;

  let isChapterSelected: boolean = false;
  let isLessonSelected: boolean = false;
  let selectedChapter: number = 0;
  let selectedLesson: number;
  const lessonTypes = ['Text', 'Video', 'Interactive'];

  let lessons: Array<Object> = chapters[selectedChapter]?.lessons ?? [];

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

  let buttons: ButtonProps[] = [
    {
      CTA: 'Update Lesson Details',
      icon: 'ri:check-line',
      type: 'submit',
      requestState: 'idle',
    },
    {
      CTA: 'Draft',
      icon: 'ri:edit-2-line',
      type: 'submit',
      requestState: 'idle',
      ButtonType: 'outline',
    },
    {
      CTA: 'Publish',
      icon: 'ri:check-line',
      type: 'submit',
      requestState: 'idle',
    },
    {
      CTA: 'Delete Lesson',
      icon: 'ri:delete-bin-7-line',
      state: 'error',
      type: 'submit',
      requestState: 'idle',
    },
  ];

  const callback = (index: number) => {
    buttons[index].requestState = 'processing';

    return async ({ update, result }) => {
      await update();
      console.log(result);
      buttons[index].requestState = 'completed';
      if (result.type == 'success') {
        toast.success(result.data.message);
      } else {
        toast.error(result.data.message);
      }
    };
  };
</script>

<div class="flex flex-col space-y-4 w-full">
  <Toaster />
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
        {:else}
          <p>No lessons</p>
        {/each}
      </select>
    </div>
  </div>

  {#if isChapterSelected && isLessonSelected}
    <Card>
      <div class="card-body space-y-2">
        <form
          method="post"
          use:enhance={() => callback(0)}
          action="?/updateLessonDetailsAction"
          class="w-full"
        >
          <div class="flex flex-col md:flex-row justify-between items-center">
            <FormControl
              ariaLabel="lesson id"
              labelText="Lesson id"
              isHidden={true}
            >
              <Input
                type="string"
                id="id"
                name="id"
                value={lessons[selectedLesson].id}
                size="md"
              />
            </FormControl>
            <FormControl
              ariaLabel="lesson index"
              labelText="Lesson Index"
              classes="basis-2/5"
            >
              <Input
                type="number"
                id="index"
                name="index"
                disabled={true}
                value={lessons[selectedLesson].index}
                size="md"
              />
            </FormControl>
            <FormControl
              ariaLabel="lesson xp"
              labelText="Lesson XP"
              classes="basis-2/5"
            >
              <Input
                type="number"
                id="xp"
                name="xp"
                value={lessons[selectedLesson].XP}
                size="md"
              />
            </FormControl>
          </div>
          <FormControl ariaLabel="chapter title" labelText="Chapter Title">
            <Input
              id="title"
              name="title"
              value={lessons[selectedLesson].title}
              size="md"
            />
          </FormControl>
          <FormControl
            ariaLabel="chapter description"
            labelText="Chapter Description"
          >
            <Input
              isTextArea={true}
              id="description"
              name="description"
              value={lessons[selectedLesson].description}
              size="md"
              classes="h-32"
            />
          </FormControl>

          <div class="flex flex-col space-y-2">
            <label class="label" for="title">
              <span class="label-text">Lesson Type</span>
            </label>
            <div class="flex justify-between">
              {#each lessonTypes as type}
                <div class="form-control">
                  <label class="label cursor-pointer gap-2">
                    <input
                      id="type"
                      type="radio"
                      name="type"
                      class="radio checked:bg-red-500"
                      value={type}
                      checked={lessons[selectedLesson].type === type}
                    />
                    <span class="label-text">{type}</span>
                  </label>
                </div>
              {/each}
            </div>
          </div>

          <div class="card-actions justify-start mt-2 py-2">
            <Button
              CTA={buttons[0].CTA}
              icon={buttons[0].icon}
              type={buttons[0].type}
              requestState={buttons[0].requestState}
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
          <div class="card-actions justify-start">
            <Button
              CTA={buttons[1].CTA}
              icon={buttons[1].icon}
              ButtonType={buttons[1].ButtonType}
              type={buttons[1].type}
              requestState={buttons[1].requestState}
            />
            <Button
              CTA={buttons[2].CTA}
              icon={buttons[2].icon}
              requestState={buttons[2].requestState}
              on:buttonClick={publishLessonContent}
            />
          </div>
        </div>
      </div>
    </Card>

    <Card>
      <form
        method="post"
        use:enhance={() => callback(3)}
        action="?/deleteLessonAction"
        class="card-body"
      >
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
        <div class="card-actions justify-start">
          <Button
            CTA={buttons[3].CTA}
            icon={buttons[3].icon}
            state={buttons[3].state}
            requestState={buttons[3].requestState}
            on:buttonClick={() => {}}
          />
        </div>
      </form>
    </Card>
  {:else}
    <div class="card shadow justify-center items-center min-h-16">
      Please Select a Chapter to edit
    </div>
  {/if}
</div>
