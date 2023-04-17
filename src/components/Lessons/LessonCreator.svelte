<script>
  import MarkdownIt from "markdown-it";
  import sanitizeHtml from "sanitize-html";
  import { query, mutation } from "svelte-apollo";
  import { afterUpdate } from "svelte";
  import { CREATE_LESSON } from "$lib/mutations/lessons";

  const md = new MarkdownIt();

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

  const createLesson = mutation(CREATE_LESSON);
  let slug = "Hey";
  let title = "Hey";
  let description = "Hey";
  let creator = "0c6cd039-b8ed-4d8d-bdca-1173ad79b028";
  let courseId = "";
  let chapterId = "8370d7fd-a74c-4ad4-b786-fdeaefea35f0"

  const handleSubmit = async () => {
    try {
      const result = await createLesson({
        variables: {
          lessonInput: {
            title,
            description,
			content: markdown,
			chapter_id: chapterId,
			index: 4
          },
        },
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
</script>

<div class="markdown-editor">
  <div class="markdown-editor__panel">
    <div class="flex justify-between">
      <span class="markdown-editor__panel__label">Markdown</span>
      <button class="btn btn-sm" on:click={handleSubmit}>Submit Lesson</button>
    </div>
    <textarea class="markdown-editor__textarea" bind:value={markdown} />
  </div>
  <div class="markdown-editor__panel">
    <span class="markdown-editor__panel__label">Output</span>
    <div class="markdown-editor__result-html">
      {@html result}
    </div>
  </div>
</div>

<style>
  .markdown-editor {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
  }

  .markdown-editor__panel {
    width: calc(50% - 1rem);
    height: 400px;
    box-sizing: inherit;
  }

  .markdown-editor__panel__label {
    display: block;
    font-weight: 700;
    margin-bottom: 0.75rem;
  }

  .markdown-editor__textarea,
  .markdown-editor__result-html {
    box-sizing: inherit;
    height: 100%;
    width: 100%;
    padding: 1rem;
    border: 1px solid black;
  }

  .markdown-editor__textarea {
    margin: 15;
  }

  .markdown-editor__result-html {
    overflow-y: scroll;
  }
</style>
