<script>
  import { Card } from "svelte-ui";
  export let repositories;
  console.log(repositories);
</script>

<section>
  {#each repositories as repo}
    <Card title={repo.repo_name}>
      <p>{repo.description}</p>
    </Card>
  {/each}
</section>
