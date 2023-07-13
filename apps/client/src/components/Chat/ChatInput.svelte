<script>
  let text = "";

  function handleMessage() {
    console.log(`hello: ${text}`);
  }
</script>

<form on:submit|preventDefault={handleMessage}>
  <div class="flex justify-between gap-2 items-center px-2 py-4 bg-base-200">
    <div class="flex gap-2 grow items-center">
      <button
        class="btn btn-sm btn-square btn-ghost"
      >
        <iconify-icon icon="ri:emotion-line" height="25" width="25" />
      </button>
      <textarea
        placeholder="Start a new message"
        class="flex textarea px-4 textarea-bordered textarea-xs w-full"
        bind:value={text}
      />
    </div>
    <button class="btn btn-sm btn-square btn-primary" type="submit">
      <iconify-icon icon="ri:send-plane-2-line" />
    </button>
  </div>
</form>
