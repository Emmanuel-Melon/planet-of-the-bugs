<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit'

	export const load: Load = ({ error, status }) => {
		return {
			props: {
				title: `${status}: ${error.message}`
			}
		}
	}
</script>

<script lang="ts">
	export let title: string
</script>

<div class="error">
	<h1>Something Went Wrong</h1>
    <p>Oh No</p>
</div>
