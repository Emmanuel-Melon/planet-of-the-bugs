<script>
  import IframeComponent from '../core/iframe/IframeComponent.svelte';
  const htmlCode = '<h1>Hello, world!</h1>';
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="code">
  <textarea class="editor" spellcheck="false" data-editor />
</section>

<section class="result">

  <IframeComponent code={htmlCode} />
</section>
