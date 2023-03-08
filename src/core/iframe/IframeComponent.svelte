<!-- IframeComponentComponent.svelte -->
<script>
  export let code = "";
</script>

<iframe
  title="editor"
  srcdoc={`<!DOCTYPE html>
    <html>
      <head></head>
      <body>
        ${code}
      </body>
    </html>`}
/>
