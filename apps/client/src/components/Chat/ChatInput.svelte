<script>
  import { enhance } from "$app/forms";
  import { getContext } from "svelte";
  let text = "";
  function handleMessage() {
    console.log(`hello: ${text}`);
  }
  const user = getContext("user");
</script>

<form on:submit|preventDefault={handleMessage} method="POST" use:enhance>
  <div class="flex justify-between gap-2 items-center px-2 py-4">
    <div class="flex gap-2 grow items-center">
      <button
        class="btn btn-sm btn-square btn-ghost"
        type="submit"
      >
        <iconify-icon icon="ri:emotion-laugh-line" height="25" width="25" />
      </button>
      <textarea
        placeholder="Start a new message"
        class="flex textarea textarea-xs w-full"
        bind:value={text}
      />
    </div>
    <button class="btn btn-sm btn-square btn-ghost" type="submit">
      <iconify-icon icon="ri:send-plane-line" height="25" width="25" />
    </button>
  </div>
</form>
