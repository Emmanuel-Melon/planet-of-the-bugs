<script>
  import { Card } from 'svelte-ui';
  export let lesson;
  import { afterUpdate } from 'svelte';
  import MarkdownIt from 'markdown-it';
  import sanitizeHtml from 'sanitize-html';

  afterUpdate(() => {
    result = sanitizeHtml(md.render(markdown), {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat([
        'h1',
        'h2',
        'img',
      ]),
    });
  });

  let markdown = '';
  let result = '';
  const md = new MarkdownIt();
</script>

<section class="space-y-2">
  <Card title={lesson.title}>
    {lesson.content}
  </Card>
  <!-- <div>
    {lesson.description}
  </div> -->
</section>
