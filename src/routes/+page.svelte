<script>
  import IframeComponent from "../core/iframe/IframeComponent.svelte";
  const htmlCode = "<h1>Hello, world!</h1>";
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<main class="wrapper">
  <section>
    <h3>Lesson 1</h3>
    <p>What are bugs?</p>
  </section>
  <section class="code">
    <textarea class="editor" spellcheck="false" data-editor />
  </section>

  <section class="result">
    <IframeComponent code={htmlCode} />
  </section>
</main>

<style>
  .wrapper {
    display: flex;
  }

  section {
    flex: 1;
  }
</style>
