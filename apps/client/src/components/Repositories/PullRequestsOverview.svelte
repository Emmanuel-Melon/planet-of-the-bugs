<script>
  import { Card } from "svelte-ui";
  export let pullRequests = [
    {
      title: "hello",
      description: "hello"
    },
  ];
</script>

<section>
  {#each pullRequests as pullRequest}
    <Card title={pullRequest.title}>
      <p>{pullRequest.description}</p>
    </Card>
  {/each}
</section>
