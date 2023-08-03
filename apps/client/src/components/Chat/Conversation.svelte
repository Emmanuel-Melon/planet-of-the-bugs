<script lang="ts">
  import { getContext } from "svelte";
  import ChatMenu from "./ChatMenu.svelte";
  import ChatInput from "./ChatInput.svelte";
  import { onMount, onDestroy } from "svelte";
  import { query } from "svelte-apollo";
  const chat = getContext("chat");
  import { FETCH_CHAT_MESSAGES } from "$lib/graphql/queries/messages";
  import ListMessages from "./ListMessages.svelte";
  let messages = query(FETCH_CHAT_MESSAGES, {
    variables: {
      chatId: "d74f9e8c-37a7-45c2-8f80-5cfa247c2062",
    },
  });
  onMount(async () => {
    messages.refetch();
  });

  $: messages.refetch();

  console.log(chat);
</script>

<div class="h-full">
  <ChatMenu />
  {#if $messages.data}
    <ListMessages messages={$messages?.data.message} />
  {:else if $messages.error}
    <div class="flex items-center justify-center h-full p-4">
      <div class="prose prose-sm">
        <h3>Failed to load messages</h3>
        <p>Some description</p>
      </div>
    </div>
  {:else if $messages.loading}
    <div class="flex items-center justify-center h-full p-4">
      <h3>Loading</h3>
    </div>
  {/if}
  <ChatInput />
</div>
