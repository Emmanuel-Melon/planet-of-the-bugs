<!-- IframeComponentComponent.svelte -->
<script>
  export let code = "";
</script>

<iframe
  title="editor"
  id="iframe"
  srcdoc={`<!DOCTYPE html>
    <html>
      <head></head>
      <body>
        ${code}
      </body>
    </html>`}
/>

<style>
  #iframe {
    background: #eee;
    height: 100%;
    width: 100%;
  }
</style>