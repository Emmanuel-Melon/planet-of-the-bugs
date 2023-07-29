<script lang="ts">
  export let chats;
  const handleChatClick = (chat) => {
    console.log(chat);
  };
  import NewConversationModal from "$components/Modals/NewConversationModal.svelte";
</script>

<div class="h-full">
  <div class="flex justify-between items-center p-2 bg-base-200">
    <div>
      <h3>My Conversations</h3>
    </div>
    <NewConversationModal />
  </div>
  <div>
    {#each chats as chat}
      <div
        class={`flex items-start gap-2 hover:bg-slate-100 cursor-pointer p-2 ${
          chat.active ? "bg-base-200 border-r-4 border-rose-900" : "bg-white"
        }`}
      >
        <div class="avatar online">
          <div class="w-12 mask mask-squircle">
            <img src={chat.avatar} alt={chat.name} />
          </div>
        </div>
        <div class="grow">
          <div class="flex items-start justify-between">
            <div>
              <h4>{chat.name}</h4>
              <p>{chat.text}</p>
            </div>
            <div>
              <p>Yesterday</p>
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
