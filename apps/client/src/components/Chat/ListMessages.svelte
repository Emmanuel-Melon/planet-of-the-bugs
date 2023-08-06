<script lang="ts">
  export let messages;
  import ChatBubble from "./ChatBubble.svelte";
  
</script>

{#if messages.length === 0}
<div class="flex items-center justify-center p-4">
    <div class="prose prose-md text-center">
      <h3>No Messages</h3>
      <p>It looks like your inbox is currently empty!</p>
    </div>
</div>
{:else}
<div class="p-2 overflow-y-auto">
  {#each messages as message}
    <ChatBubble {message} />
  {/each}
</div>
{/if}