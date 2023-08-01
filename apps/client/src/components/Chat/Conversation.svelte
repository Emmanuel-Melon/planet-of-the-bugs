<script lang="ts">
  export let chat;
  import ChatMenu from "./ChatMenu.svelte";
  import ChatBubble from "./ChatBubble.svelte";
  import ChatInput from "./ChatInput.svelte";
  import { onMount, onDestroy } from "svelte";
  import { query } from "svelte-apollo";
  import {
    FETCH_CHAT_MESSAGES,
  } from "$lib/graphql/queries/messages";
  let messages = query(FETCH_CHAT_MESSAGES, {
    variables: {
      chatId: "d74f9e8c-37a7-45c2-8f80-5cfa247c2062",
    },
  });
  onMount(async () => {
    messages.refetch();
  });

  $: messages.refetch();
</script>

<div class="h-full">
  <ChatMenu />
  {#if $messages.data}
    <div class="p-2 overflow-y-auto">
      {#each $messages?.data.message as message}
        <ChatBubble {message} />
      {/each}
    </div>
  {:else if $messages.error}
    <h3>Error</h3>
  {:else if $messages.loading}
    <div>Loading</div>
  {/if}

  <ChatInput />
</div>
