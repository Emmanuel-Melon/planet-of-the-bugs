<script lang="ts">
  import "iconify-icon";
  import ChatList from "$components/Chat/ChatList.svelte";
  import Conversation from "$components/Chat/Conversation.svelte";
  export let data: PageData;
</script>

<section class="flex ">
  <div class="basis-2/5">
    {#if data}
      <ChatList chats={data.chats} />
    {/if}
  </div>
  <div class="basis-3/5">
    <Conversation />
  </div>
</section>
