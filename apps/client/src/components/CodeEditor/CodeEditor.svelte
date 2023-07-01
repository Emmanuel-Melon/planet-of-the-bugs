<script lang="ts">
  import { onMount } from "svelte";

  import type monaco from "monaco-editor";
  import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
  import jsonWorker from "monaco-editor/esm/vs/language/json/json.worker?worker";
  import cssWorker from "monaco-editor/esm/vs/language/css/css.worker?worker";
  import htmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker";
  import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";
  import "iconify-icon";
  import { monacoEditorOptions } from "$lib/monaco/config";
  import { executeCode, transpileCode } from "$lib/monaco/helpers";

  export let handleExpand: Function;

  let code = "";

  let divEl: HTMLDivElement = null;
  let editor: monaco.editor.IStandaloneCodeEditor;
  let Monaco;

  let languages = ["JavaScript", "Java", "Python"];
  $: currentLang = 0;

  onMount(async () => {
    // @ts-ignore
    self.MonacoEnvironment = {
      getWorker: function (_moduleId: any, label: string) {
        if (label === "json") {
          return new jsonWorker();
        }
        if (label === "css" || label === "scss" || label === "less") {
          return new cssWorker();
        }
        if (label === "html" || label === "handlebars" || label === "razor") {
          return new htmlWorker();
        }
        if (label === "typescript" || label === "javascript") {
          return new tsWorker();
        }
        return new editorWorker();
      },
    };

    Monaco = await import("monaco-editor");
    editor = Monaco.editor.create(
      divEl,
      monacoEditorOptions({
        value: code,
      })
    );

    return () => {
      editor.dispose();
    };
  });

  function handleCodeExecution() {
    const sourceCode = editor.getValue();
    const transpileCoded = transpileCode(sourceCode)
    const executedCode = executeCode(editor);
  }
</script>

<section class="code w-full">
  <div class="p-2 text-white flex justify-between items-center">
    <p>Code Editor</p>
    <div class="w-2/5 flex justify-evenly items-center">
      <div class="dropdown dropdown-hover">
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label tabindex="0" class="btn btn-sm gap-2">
          <p>{languages[currentLang]}</p>
          <iconify-icon icon="ri:arrow-down-double-line" />
        </label>

        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <ul
          tabindex="0"
          class="dropdown-content menu p-2 shadow rounded-box w-52"
        >
          {#each languages as lang, index}
            <li>
              <button on:click|preventDefault={() => (currentLang = index)}
                >{lang}</button
              >
            </li>
          {/each}
        </ul>
      </div>

      <button on:click={handleCodeExecution}>
        <iconify-icon icon="ri:play-circle-line" />
      </button>

      <button on:click|preventDefault={() => handleExpand()}>
        <iconify-icon icon="ri:aspect-ratio-line" />
      </button>

      <button>
        <iconify-icon icon="ri:settings-2-line" />
      </button>
    </div>
  </div>
  <div bind:this={divEl} class="min-h-[400px] w-full" />
</section>
