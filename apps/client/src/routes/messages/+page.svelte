<script lang="ts">
  import "iconify-icon";
  import { setContext } from "svelte";
  import { onDestroy, onMount } from "svelte";
  import { selectedChat } from "./store";
  import ChatDetails from "$components/Chat/ChatDetails.svelte";
  export let data: PageData;
  setContext("user", data.user);
  setContext("selectedChat", selectedChat);

  let currentChat;
  const unsubscribe = selectedChat.subscribe((value) => {
  
    currentChat = value;
  });
  onDestroy(unsubscribe);

</script>

<ChatDetails />