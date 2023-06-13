<script>
  export let chats;

  const handleConversationClick = (conversation) => {
    console.log(conversation);
  }
</script>

<div>
  {#each chats as chat}
    <div on:click={() => handleConversationClick(chat)}
      class={`flex items-start gap-2 hover:bg-slate-100 cursor-pointer p-2 ${
        chat.active ? "bg-base-200 border-l-4 border-primary" : "bg-white"
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
