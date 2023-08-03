<script lang="ts">
  export let chats;
  export let loading;
  export let onChatSelected;
  import autoAnimate from "@formkit/auto-animate";
  import NewConversationModal from "$components/Modals/NewConversationModal.svelte";
  import Chat from "./Chat.svelte";
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
      <Chat {chat} />
    {/each}
  </div>
</div>
