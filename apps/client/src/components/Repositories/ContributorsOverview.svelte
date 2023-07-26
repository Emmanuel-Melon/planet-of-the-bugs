<script>
    import { Card } from "svelte-ui";
    export let contributors = [
      {
        name: "hello",
        description: "hello"
      },
    ];
  </script>
  
  <section>
    {#each contributors as contributor}
      <Card name={contributor.name}>
        <p>{contributor.description}</p>
      </Card>
    {/each}
  </section>
  