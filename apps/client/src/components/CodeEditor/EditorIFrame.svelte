<script>
  export let sourceDoc;
</script>

<section class="p-4">
  <div>
    <h3>Output</h3>
    </div>
  <div class="flex justify-center px-4 py-16 border-t border-base-300">
    <iframe
    title="editor"
    id="iframe"
    srcdoc={sourceDoc}
  />
  </div>
</section>