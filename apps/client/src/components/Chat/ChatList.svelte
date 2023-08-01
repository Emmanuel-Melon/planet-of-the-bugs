<script lang="ts">
  export let chats;
  export let loading;
  export let onChatSelected;
  import autoAnimate from "@formkit/auto-animate";
  import NewConversationModal from "$components/Modals/NewConversationModal.svelte";
</script>

<div class="h-full">
  <div class="flex justify-between items-center p-2 bg-base-200">
    <div>
      <h3 class="text-xl"> My Conversations</h3>
    </div>
    <NewConversationModal />
  </div>
  <div use:autoAnimate>
    {#each chats as chat}
      <div
        class={`flex items-start gap-2 hover:bg-base-200 cursor-pointer p-2 ${
          chat.active ? "border-r-4 border-rose-900" : "bg-white"
        }`}
        on:click={() => onChatSelected(chat)}
      >
        <div class="avatar">
          <div class="w-10 rounded-full">
            <img src={chat.avatar} alt={chat.name} />
          </div>
        </div>
        <div class="grow">
          <div class="flex items-start justify-between">
            <div>
              <h4 class="text-xl text-bold">{chat.name}</h4>
              <p class="text-truncate">{chat.text}</p>
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
