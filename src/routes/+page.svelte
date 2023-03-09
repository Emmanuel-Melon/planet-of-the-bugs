<script>
  import IframeComponent from "../core/iframe/IframeComponent.svelte";
  let htmlCode = "<h1>Hello, world!</h1>";
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<main class="wrapper">
  <section class="code">
    <textarea class="editor" spellcheck="false" data-editor bind:value={htmlCode}/>
  </section>

  <section class="result">
    <IframeComponent code={htmlCode} />
  </section>
</main>

<style>
  .wrapper {
    display: flex;
    justify-content: space-between;
    height: 600px;
  }

  .code, .result {
    
    flex: 1;
  }

  .editor {
    height: 100%;
    width: 100%;
    flex: 1;
  }


</style>
