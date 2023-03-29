<script>
  import ChapterOverview from "./ChapterOverview.svelte";
  import "iconify-icon";
  // export let data;
  //let { slug } = data;

  const chapters = [
    {
      course_id: "d4ed6041-ba43-4c8a-bacc-3062ef4f5485",
      title: "The Origin Of Bugs",
      description:
        "This chapter will trace back the origin and history of those bugs and how they came into existence.",
    },
    {
      course_id: "d4ed6041-ba43-4c8a-bacc-3062ef4f5485",
      title: "Search Party",
      description:
        "Together, we'll go out on a hunt, traditionally known as debugging which is the process of identifying, analyzing, and resolving errors or bugs in computer programs.",
    },
  ];

  const lessons = [
    {
      id: "85ceb7ff-c4a9-449e-b6fb-572afecec604",
      title: "What is a software bug?",
      description: null,
    },
    {
      id: "de1e3aa9-03fc-409f-a779-3941adcd2457",
      title: "The Right Hosts!",
      description: null,
    },
  ];
</script>

<section class=" my-4">
  <div class="gap-2">
    {#each chapters as chapter}
      <div
        class="border border-#efefef p-2 rounded-sm card bg-base-100 shadow-md"
      >
        <ChapterOverview {chapter} />
        <div>
          {#each lessons as lesson}
            <div class="flex py-2 items-center gap-2">
              <span class="bg-black rounded-full px-1 text-white">
                <iconify-icon icon="heroicons:document-text" />
              </span>
              <a class="link" href={`/courses/introduction_to_debugging/${lesson.id}`}
                >{lesson.title}</a
              >
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>
