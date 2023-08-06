<script lang="ts">
  import { getContext } from "svelte";
  import { onMount, onDestroy } from "svelte";
  import { query } from "svelte-apollo";
  import { FETCH_CHAT_MESSAGES } from "$lib/graphql/queries/messages";
  import ListMessages from "./ListMessages.svelte";
  const selectedChat = getContext("selectedChat");
  let chat;


  onMount(async () => {
    messages.refetch();
  });

  $: messages.refetch();

  const unsubscribe = selectedChat.subscribe((value) => {
    console.log(value);
    chat = value;
  });

  $: chat;

  onDestroy(unsubscribe);

  let messages = query(FETCH_CHAT_MESSAGES, {
    variables: {
      chatId: chat?.id,
    },
  });



  console.log(chat);
</script>

<div class="h-full">

  {#if $messages.data}
    <ListMessages messages={$messages?.data.message} />
  {:else if $messages.error}
    <div class="flex items-center justify-center h-full p-4">
      <div class="prose prose-md text-center">
        <h3>🛑 Oops, There Seems to Be a Glitch! 🐞</h3>
        <p>We apologize, but it seems that your messages are currently unable to load</p>
      </div>
    </div>
  {:else if $messages.loading}
    <div class="flex items-center justify-center h-full p-4">
      <h3>Loading</h3>
    </div>
  {/if}
</div>
