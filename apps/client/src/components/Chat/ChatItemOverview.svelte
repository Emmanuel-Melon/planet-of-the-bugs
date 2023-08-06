<script lang="ts">
  export let chat;
  import { createEventDispatcher } from "svelte";
  import { getContext } from "svelte";
  const selectedChat = getContext("selectedChat");
  const dispatch = createEventDispatcher();
  const setChatSelected = () => {
    dispatch("message", {
      ...chat,
    });
  };

</script>

<div
  class={`flex items-center gap-2 hover:bg-base-200 bg-base-100 cursor-pointer p-2 ${
    chat?.id === selectedChat?.id ? "border-r-4 border-rose-900 " : "border-l-4 border-rose-900"
  }`}
  on:click={setChatSelected}
>
  {#if chat?.chat_participants.length === 1}
    <div class="avatar">
      <div class="w-12 rounded-full shadow-md">
        <img src={chat?.chat_participants[0].user?.avatar} alt={chat.name} />
      </div>
    </div>
    <div class="grow">
      <div class="flex items-start justify-between">
        <div>
          <h4 class="text-xl text-bold">
            {chat?.chat_participants[0].user?.name}
          </h4>
        </div>
      </div>
    </div>
  {/if}
</div>
