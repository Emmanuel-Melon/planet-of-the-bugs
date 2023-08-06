<script lang="ts">
  export let chats;
  export let loading;
  import { createEventDispatcher, getContext } from "svelte";
  import { onMount, onDestroy } from "svelte";
  import autoAnimate from "@formkit/auto-animate";
  import NewConversationModal from "$components/Modals/NewConversationModal.svelte";
  import ChatItemOverview from "./ChatItemOverview.svelte";
  import { selectedChat } from "../../routes/messages/store";
 

  const dispatch = createEventDispatcher();

  const displayLatestChat = (event) => {
    // selectedChat.update(event.detail);
  }

  onMount(async () => {
    
  });
</script>

<div class="h-full w-full">
  <div class="flex justify-between items-center p-2">
    <div>
      <h3 class="text-xl">Chats</h3>
    </div>
    <NewConversationModal />
  </div>
  <div use:autoAnimate class="h-full space-y-2 p-2">
    {#each chats as chat}
      <ChatItemOverview {chat} on:message={displayLatestChat} />
    {/each}
  </div>
</div>
