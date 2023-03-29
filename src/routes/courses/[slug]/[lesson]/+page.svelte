<script>
  export let data;
  import CodeEditor from '$components/CodeEditor/CodeEditor.svelte';
  let { lesson } = data;
</script>

<h1>Hello, {lesson}</h1>
<CodeEditor />
