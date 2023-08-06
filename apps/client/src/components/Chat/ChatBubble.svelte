<script lang="ts">
  export let message;
  import { getContext } from "svelte";
  import dayjs from "dayjs";
  const user = getContext("user");
</script>

<div
  class={`chat ${message?.user?.id !== user?.id ? "chat-start" : "chat-end"}`}
>
  <div class="chat-header">
    <time class="text-xs opacity-50"
      >{dayjs(message.created_at).format("MM-DD HH:mm")}</time
    >
  </div>
  <div
    class={`chat-bubble ${
      message?.user?.id !== user?.id ? "bg-base-200" : "bg-rose-50"
    } text-neutral-focus`}
  >
    {message?.text}
  </div>
</div>
