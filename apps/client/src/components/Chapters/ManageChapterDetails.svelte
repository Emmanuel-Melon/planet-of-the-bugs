<script lang="ts">
  import { Card } from "svelte-ui";
  export let courseId: string;
  export let chapters: Array<Object>;
  import NewChapterModal from '$components/Courses/NewChapterModal.svelte';

  let isSelected: boolean = false;
  let selectedChapter: number;

  const handleChapterChange = (event) => {
    isSelected = true;
    selectedChapter = event.target.selectedIndex - 1;
    // const fetchLessons = query(FETCH_LESSON_BY_INDEX_CHAPTER_ID, {
    //   variables: {
    //   index : chapterIndex,
    //   chapterId : "dsadnajda",
    //   }
    // });
  };

  $: isSelected, selectedChapter;
  console.log(chapters);
</script>

<div class="flex flex-col space-y-4 w-full">
  <div class="h-max">
    <Card>
      <div class="card-body space-y-2">
        <div class="flex justify-between item-center w-full">
          <h2 class="card-title">Chapters Details</h2>
          <NewChapterModal {courseId} chaptersLength={chapters.length} />
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
            <button class="btn btn-sm btn-primary gap-2"
              ><iconify-icon icon="ri:check-line" /> Update Chapter Details</button
            >
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
          This option will remove the currently selected chapter from this course <span class="italic">({chapters[selectedChapter].title})</span>. You’ll
          get a chance to confirm your choice.
        </p>
        <div class="card-actions justify-end">
          <button class="btn btn-md btn-error gap-2"
            ><iconify-icon icon="ri:delete-bin-7-line" /> Delete Chapter</button
          >
        </div>
      </div>
    </Card>
  {:else}
    <div>Please Select a Chapter to edit</div>
  {/if}
</div>
