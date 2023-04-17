<script>
	import MarkdownIt from "markdown-it";
	import sanitizeHtml from "sanitize-html";
	import { afterUpdate } from 'svelte';
	
	const md = new MarkdownIt();
	
	let markdown = '';
	let result = '';
	
	afterUpdate(() => {
		result = sanitizeHtml(md.render(markdown), {
			allowedTags: sanitizeHtml.defaults.allowedTags.concat([ 'h1', 'h2', 'img' ])
		});
	});
</script>

<style>	
	.markdown-editor {
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
	}
	
	.markdown-editor__panel {
		width: calc(50% - 1rem);
		height: 400px; 
		box-sizing: inherit;
	}
	
	.markdown-editor__panel__label {
		display: block;
		font-weight: 700;
		margin-bottom: 0.75rem;
	}
	
	.markdown-editor__textarea, .markdown-editor__result-html {
		box-sizing: inherit;
		height: 100%;
		width: 100%;
		padding: 1rem;
		border: 1px solid black;
	}
	
	.markdown-editor__textarea {
		margin: 0;
	}
	
	.markdown-editor__result-html {
		overflow-y: scroll;
	}
</style>

<div class="markdown-editor">
	<div class="markdown-editor__panel">
		<span class="markdown-editor__panel__label">Markdown</span>
		<textarea class="markdown-editor__textarea" bind:value={markdown} />
	</div>
	<div class="markdown-editor__panel">
		<span class="markdown-editor__panel__label">Output</span>
		<div class="markdown-editor__result-html">
			{@html result}
		</div>
	</div>
</div>