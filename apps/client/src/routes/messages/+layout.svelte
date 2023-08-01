<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import "iconify-icon";
  import { selectedChat } from "./store";
  import { Card } from "svelte-ui";
  import ChatList from "$components/Chat/ChatList.svelte";
  import Conversation from "$components/Chat/Conversation.svelte";
  import { page } from "$app/stores";
  export let data;
  let selectedItemValue;

  const unsubscribe = selectedChat.subscribe((value) => {
    selectedItemValue = value;
  });

  const onChatSelected = (chat) => {
    console.log(chat)
    // selectedChat.set(chatId);
  };

  onDestroy(unsubscribe);
</script>

<section class="flex">
  <div class="basis-2/5">
    {#if data}
      <ChatList {onChatSelected} chats={data.chats} loading={data.loading} />
    {/if}
  </div>
  <div class="basis-3/5">
    <slot />
  </div>
</section>
