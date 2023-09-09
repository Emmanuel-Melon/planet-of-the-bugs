<script lang="ts">
  import "iconify-icon";
  import ChatEmptyState from "$components/EmptyStates/ChatEmptyState.svelte";
  import { setContext } from "svelte";
  import { onDestroy, onMount } from "svelte";
  import { selectedChat } from "./store";
  import ChatDetails from "$components/Chat/ChatDetails.svelte";
  import ChatMenu from "$components/Chat/ChatMenu.svelte";
  import ChatInput from "$components/Chat/ChatInput.svelte";
  export let data: PageData;
  import { createEventDispatcher, getContext } from "svelte";
  let currentChat;
  const unsubscribe = selectedChat.subscribe((value) => {
    currentChat = value;
  });

  setContext("user", data.user);
  setContext("selectedChat", selectedChat);

  $: currentChat;
  onDestroy(unsubscribe);
</script>

<div class="full">
  <ChatEmptyState />
</div>
