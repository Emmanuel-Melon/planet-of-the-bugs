<script lang="ts">
  export let message;
</script>

<div
  class={`chat ${
    message?.senderName === "Muzan Kibutsuji" ? "chat-start" : "chat-end"
  }`}
>

  <div class="chat-header">
    <time class="text-xs opacity-50">{message.timestamp}</time>
  </div>
  <div class={`chat-bubble ${
    message?.senderName === "Muzan Kibutsuji" ? "bg-base-200" : "bg-rose-200"
  } text-neutral-focus`}>
    {message?.text}
  </div>
</div>
