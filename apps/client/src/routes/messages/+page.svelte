<script lang="ts">
  import "iconify-icon";
  import { setContext } from "svelte";
  import { onDestroy } from "svelte";
  import { selectedChat } from "./store";
  import Conversation from "$components/Chat/Conversation.svelte";
  export let data: PageData;
  setContext("user", data.user);

  let currentChat;
  const unsubscribe = selectedChat.subscribe((value) => {
    console.log(value);
    currentChat = value;
  });
  onDestroy(unsubscribe);
</script>

<section>
  <svelte:component this={Conversation} />
</section>
