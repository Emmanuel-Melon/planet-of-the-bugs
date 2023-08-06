<script lang="ts">
  import "iconify-icon";
  import { setContext } from "svelte";
  import { onDestroy, onMount } from "svelte";
  import { selectedChat } from "./store";
  import ChatDetails from "$components/Chat/ChatDetails.svelte";
  import ChatMenu from "$components/Chat/ChatMenu.svelte";
  import ChatInput from "$components/Chat/ChatInput.svelte";
  export let data: PageData;
  import { createEventDispatcher, getContext } from "svelte";
  const dispatch = createEventDispatcher();
  setContext("user", data.user);
  setContext("selectedChat", selectedChat);
  let currentChat;
  let currentChatId: number;
  const unsubscribe = selectedChat.subscribe((value) => {
    console.log(value);
    currentChat = value;
  });

  $: currentChat;
  onDestroy(unsubscribe);
</script>

<div class="full">
  <ChatMenu participants={currentChat?.chat_participants} />
  <ChatDetails chat={currentChat} />
  <ChatInput />
</div>
