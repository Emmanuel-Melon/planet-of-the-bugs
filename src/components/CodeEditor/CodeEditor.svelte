<script lang="ts">
  import type monaco from "monaco-editor";
  import { onMount } from "svelte";
  import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
  import jsonWorker from "monaco-editor/esm/vs/language/json/json.worker?worker";
  import cssWorker from "monaco-editor/esm/vs/language/css/css.worker?worker";
  import htmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker";
  import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";
  import "iconify-icon";
  import { transform } from "@babel/standalone";

  export let handleExpand: Function;

  let code: string = "";

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
    editor = Monaco.editor.create(divEl, {
      value: ["const x = () => {", '\tconsole.log("Hello world!");', "}"].join(
        "\n"
      ),
      language: "javascript",
      theme: "vs-dark",
    });

    return () => {
      editor.dispose();
    };
  });

  type StateType = "editing" | "error";
  type ErrorMessageType = string;

  interface TranspiledCodeType {
    iframeCode: string;
    sourceCode: string;
  }

  const transpileCode = (code: string) => {
    const options = { presets: ['es2015-loose', 'react']};
    const { code: transpiledCode } = transform(code, options)
    console.log(transpiledCode);
  }

  const executeCode = () => {
    try {
      const code = editor.getValue();
      const transpiled = transpileCode(code);
      console.log(code);
    } catch (err) {
      console.log(err);
    }
  };
</script>

<section class="code w-full">
  <div class="bg-accent p-2 text-white flex justify-between items-center">
    <h3>Code Editor</h3>
    <div class="w-2/5 flex justify-evenly">
      <div class="dropdown dropdown-hover">
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label tabindex="0" class="btn btn-sm">
          <p>{languages[currentLang]}</p>
          <iconify-icon icon="heroicons:chevron-down-20-solid" />
        </label>

        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <ul
          tabindex="0"
          class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
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

      <button on:click={executeCode}>
        <iconify-icon icon="heroicons:play-solid" />
      </button>

      <button on:click|preventDefault={() => handleExpand()}>
        <iconify-icon icon="heroicons:arrows-pointing-out-20-solid" />
      </button>

      <button>
        <iconify-icon icon="heroicons:cog-8-tooth-solid" />
      </button>
    </div>
  </div>
  <div bind:this={divEl} class="min-h-[350px] w-full" />
</section>
