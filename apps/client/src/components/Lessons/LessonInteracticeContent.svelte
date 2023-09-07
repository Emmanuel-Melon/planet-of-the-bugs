<script>
  export let lesson;
  import CodeEditor from "$components/CodeEditor/CodeEditor.svelte";
  import EditorTerminal from "$components/CodeEditor/EditorTerminal.svelte";
  import EditorIFrame from "$components/CodeEditor/EditorIFrame.svelte";

  export let sourceDoc = ``;

  $: isExpanded = false;

  const handleExpand = () => {
    isExpanded = !isExpanded;
  };
</script>

<section>
  <div class="flex h-full">
    <div class="basis-2/4">
      <CodeEditor {handleExpand} {isExpanded} />
    </div>
    <div class="basis-2/4 h-full">
        <EditorIFrame {sourceDoc} />
    </div>
  </div>
</section>
