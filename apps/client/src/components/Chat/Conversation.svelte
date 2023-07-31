<script lang="ts">
  import ChatMenu from "./ChatMenu.svelte";
  import ChatBubble from "./ChatBubble.svelte";
  import ChatInput from "./ChatInput.svelte";
  import { fetchMessages } from "$lib/data/messages";
  import { onMount, onDestroy } from "svelte";
  let messages: any[] = [];
  onMount(async () => {
    messages = await fetchMessages();
  });
  $: messages;
</script>

<div class="h-full">
  <ChatMenu />
  <div class="p-2 overflow-y-auto">
    {#each messages as message}
      <ChatBubble {message} />
    {/each}
  </div>
  <ChatInput />
</div>
