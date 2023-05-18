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
  let chapterId = "8370d7fd-a74c-4ad4-b786-fdeaefea35f0";

  const handleSubmit = async () => {
    try {
      const result = await createLesson({
        variables: {
          lessonInput: {
            title,
            description,
            content: markdown,
            chapter_id: chapterId,
            index: 4,
          },
        },
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
</script>

<div class="card h-96 bg-white">
  <div class="rounded-md">
    {@html result}
  </div>
</div>
