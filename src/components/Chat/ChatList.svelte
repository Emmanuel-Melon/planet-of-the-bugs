<script>
  export let chats;
</script>

<div>
  {#each chats as chat}
    <div
      class={`flex items-start gap-2 hover:bg-slate-100 cursor-pointer p-2 ${
        chat.active ? "bg-zinc-100 border-r-4 border-primary" : "bg-white"
      }`}
    >
      <div class="avatar online">
        <div class="w-12 mask mask-squircle">
          <img src={chat.avatar} alt={chat.name} />
        </div>
      </div>
      <div class="prose prose-sm">
        <h4>{chat.name}</h4>
        <p>{chat.text}</p>
      </div>
    </div>
  {/each}
</div>
