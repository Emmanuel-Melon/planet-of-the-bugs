<script>
  import { onMount } from "svelte";
  export let data;
  let { lesson } = data;
  import CodeEditor from "$components/CodeEditor/CodeEditor.svelte";
  import EditorTerminal from "$components/CodeEditor/EditorTerminal.svelte";
  import EditorIFrame from "$components/CodeEditor/EditorIFrame.svelte";
  import LessonSidebar from "$components/Lessons/LessonSidebar.svelte";

  import MarkdownIt from "markdown-it";
  import sanitizeHtml from "sanitize-html";
  import { query, mutation } from "svelte-apollo";
  import { afterUpdate } from "svelte";
  import { CREATE_LESSON } from "$lib/graphql/mutations/lessons";

  let markdown = "";
  let result = "";

  afterUpdate(() => {
    result = sanitizeHtml(md.render(markdown), {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat([
        "h1",
        "h2",
        "img",
      ]),
    });
  });
  
  export let sourceDoc = `<div>
      <h1>Planet Of The Bugs!</h1>
      <p>Learn How to Debug</p>
    </div>`;

  $: isExpanded = false;

  const handleExpand = () => {
    isExpanded = !isExpanded;
  };

  console.log(lesson.data.lessons_by_pk);
  const md = new MarkdownIt();
</script>

<section class="h-screen">
  <div class="flex h-full">
    <div class="basis-1/5 h-full">
      <LessonSidebar lesson={lesson.data.lessons_by_pk} />
    </div>
    {#if lesson.data.lessons_by_pk.type === "text"}
      <div>{@html lesson.data.lessons_by_pk.content}</div>
    {:else if lesson.data.lessons_by_pk.type === "video"}
      <p>{lesson.data.lessons_by_pk.title}</p>
    {:else if lesson.data.lessons_by_pk.type === "interactive"}
      <div class="basis-2/5">
        <CodeEditor {handleExpand} {isExpanded} />
      </div>
      <div class="basis-2/5 h-full">
        <div>
          <EditorIFrame {sourceDoc} />
          <EditorTerminal />
        </div>
      </div>
    {/if}
  </div>
</section>
