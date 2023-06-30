<script lang="ts">
  import { onDestroy } from 'svelte';
  export let data;
  import { subscribedRepos } from '../../subscribedRepos';

  const { repo } = data;

  let userRepos;
  const unsubscribe = subscribedRepos.subscribe((repos) => {
    userRepos = repos;
  });

  onDestroy(() => {
    unsubscribe;
  });
</script>

<h1>Hello, World</h1>
