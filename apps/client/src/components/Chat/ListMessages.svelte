<script lang="ts">
  export let messages;
  import ChatBubble from "./ChatBubble.svelte";
  
</script>

{#if messages.length === 0}
<div class="flex items-center justify-center p-4">
    <div class="prose prose-sm">
      <h3>No Messages</h3>
      <p>Some description</p>
      <button class="btn btn-sm">New Chat</button>
    </div>
</div>
{:else}
<div class="p-2 overflow-y-auto">
  {#each messages as message}
    <ChatBubble {message} />
  {/each}
</div>
{/if}