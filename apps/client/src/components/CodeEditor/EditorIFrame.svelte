<script>
  export let sourceDoc;
</script>

<div class="mockup-window border border-base-300">
  <div class="flex justify-center px-4 py-16 border-t border-base-300">
    <iframe
    title="editor"
    id="iframe"
    srcdoc={sourceDoc}
  />
  </div>
</div>
