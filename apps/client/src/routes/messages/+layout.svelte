<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { setContext } from "svelte";
  import "iconify-icon";
  import { selectedChat } from "./store";
  import ChatList from "$components/Chat/ChatList.svelte";
  import { page } from "$app/stores";

  let activeChat;

  const unsubscribe = selectedChat.subscribe((value) => {
    activeChat = value;
  });

  onMount(async () => {
    selectedChat.set($page.data.chats[0]);
  });

  $: activeChat;
  onDestroy(unsubscribe);
</script>

<section class="flex h-full min-h-full max-h-full flex-grow">
  <div class="basis-1/4 ">
    {#if $page.data.chats}
      <ChatList chats={$page.data.chats} loading={$page.data.loading} />
    {/if}
  </div>
  <div class="basis-3/4 ">
    <slot />
  </div>
</section>
