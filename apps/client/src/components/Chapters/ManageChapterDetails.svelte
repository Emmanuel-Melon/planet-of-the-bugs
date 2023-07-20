<script lang="ts">
  import { goto } from '$app/navigation';
  import { mutation } from 'svelte-apollo';
  import { ADD_CHAPTER } from '$lib/graphql/mutations/courses';
  import { Button, Card } from 'svelte-ui';
  import type { RequestState } from 'svelte-ui/Types';
  import NewChapterModal from '$components/Modals/NewChapterModal.svelte';
  export let courseId: string;
  export let chapters: Array<Object>;

  const addChapter = mutation(ADD_CHAPTER);

  let isSelected: boolean = false;
  let selectedChapter: number;

  const handleChapterChange = (event) => {
    isSelected = true;
    selectedChapter = event.target.selectedIndex - 1;
  };

  const handleNewChapterSubmit = async (event) => {
    requestState = 'processing';
    const chapterInput = {
      ...event.detail,
      index: chapters.length + 1,
      course_id: courseId,
    };
    try {
      const result = await addChapter({
        variables: {
          chapterInput,
        },
      });
      requestState = 'completed';
      console.log('New chapter added successfully!');
      document.getElementById('close')?.click();
      goto(location.href, {
        replaceState: true,
        noScroll: true,
        keepFocus: true,
      });
    } catch (error) {
      requestState = 'failed';
      console.log(error);
    }
  };

  let requestState: RequestState = 'idle';

  $: isSelected, selectedChapter;
</script>

<div class="flex flex-col space-y-4 w-full">
  <div class="h-max">
    <Card>
      <div class="card-body space-y-2">
        <div class="flex justify-between item-center w-full">
          <h2 class="card-title">Chapters Details</h2>
          <NewChapterModal
            {requestState}
            on:buttonClick={handleNewChapterSubmit}
          />
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
      </div>
    </Card>
  </div>

  {#if isSelected}
    <div class="card card-compact shadow space-y-4">
      <div class="card-body space-y-2">
        <form class="w-full">
          <div class="form-control w-full">
            <label class="label" for="index">
              <span class="label-text">Chapter Index:</span>
            </label>
            <input
              type="number"
              disabled
              bind:value={chapters[selectedChapter].index}
              class="input input-md input-bordered w-full"
              id="lessonIndex"
            />
          </div>
          <div class="form-control w-full">
            <label class="label" for="title">
              <span class="label-text">Chapter Title:</span>
            </label>
            <input
              type="text"
              bind:value={chapters[selectedChapter].title}
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
              bind:value={chapters[selectedChapter].description}
              type="text"
              placeholder="Type here"
              class="input input-md input-bordered w-full h-32"
              id="lessonDescription"
            />
          </div>
          <div class="card-actions justify-end mt-2 py-2">
            <Button
              CTA="Update Chapter Details"
              icon="ri:check-line"
              on:buttonClick={() => {}}
            />
          </div>

          <!-- <div class="flex flex-col space-y-2">
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
                      checked
                    />
                    <span class="label-text">{type}</span>
                  </label>
                </div>
              {/each}
            </div>
          </div> -->
        </form>
      </div>
    </div>

    <Card>
      <div class="card-body">
        <h3 class="card-title">Delete Chapter</h3>
        <p>
          This option will remove the currently selected chapter from this
          course <span class="italic">({chapters[selectedChapter].title})</span
          >. You’ll get a chance to confirm your choice.
        </p>
        <div class="card-actions justify-end">
          <Button
            CTA="Delete Chapter"
            icon="ri:delete-bin-7-line"
            state="error"
            on:buttonClick={() => {}}
          />
        </div>
      </div>
    </Card>
  {:else}
    <div>Please Select a Chapter to edit</div>
  {/if}
</div>
