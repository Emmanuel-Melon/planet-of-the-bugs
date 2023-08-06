<script lang="ts">
  let participants;
  import { onMount, onDestroy } from "svelte";
  import { getContext } from "svelte";
  const selectedChat = getContext("selectedChat");
  
  const unsubscribe = selectedChat.subscribe((value) => {
    participants = value?.chat_participants;
  });

  $: participants;
  onDestroy(unsubscribe);

</script>

<div class="flex justify-between items-center">
  <div class="flex justify-between items-center w-full p-2">
    {#if participants?.length === 1}
      <div class="flex items-center gap-4">
        <div class="chat-image avatar">
          <div class="w-10 rounded-full">
            <img
              src={participants[0].user?.avatar}
              alt={participants[0].user?.name}
            />
          </div>
        </div>
        <h3>{participants[0].user?.name}</h3>
      </div>
      <div class="flex items-center gap-2">
        <button class="btn btn-sm btn-ghost btn-square">
          <iconify-icon icon="ri:information-line" height="20" width="20" /></button
        >
      </div>
    {/if}
  </div>
</div>
