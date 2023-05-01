<script>
  export let repositories;
  console.log(repositories.nodes[0]);
</script>

<h3>Hello</h3>
<div class="flex-wrap">
  {#each repositories.nodes as node}
    <div class="card w-96 bg-gray-100 shadow-lg">
      <div class="card-body">
        <h3>{node?.name}</h3>
        <h3>{node?.description}</h3>
      </div>
    </div>
  {/each}
</div>
