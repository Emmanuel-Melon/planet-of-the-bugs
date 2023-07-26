<script>
  import { Card } from "svelte-ui";
  export let repositories = [
    {
      title: "hello",
      description: "hello"
    },
  ];
</script>

<section>
  {#each repositories as repo}
    <Card title={repo.title}>
      <p>{repo.description}</p>
    </Card>
  {/each}
</section>
