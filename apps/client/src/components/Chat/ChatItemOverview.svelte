<script lang="ts">
  export let chat;
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  const setChatSelected = () => {
    console.log("dispatching!");
    dispatch("message", {
      ...chat
    });
  };
</script>

<div
  class={`flex items-start gap-2 hover:bg-base-200 bg-base-200 cursor-pointer p-2 ${
    chat.active ? "border-r-4 border-rose-900 " : "bg-white"
  }`}
  on:click={setChatSelected}
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
