<script>
  let text = "";

  function handleMessage() {
    console.log(`hello: ${text}`);
  }
</script>

<form on:submit|preventDefault={handleMessage}>
  <div class="flex justify-between gap-2 items-center p-2">
    <div class="flex gap-2 grow items-center">
      <button
        class="btn btn-sm btn-circle btn-outline btn-accent"
        type="submit"
      >
        <iconify-icon icon="ri:bear-smile-line" />
      </button>
      <textarea
        placeholder="Start a new message"
        class="flex textarea px-4 textarea-bordered textarea-xs w-full"
        bind:value={text}
      />
    </div>
    <button class="btn btn-sm btn-circle btn-primary" type="submit">
      <iconify-icon icon="ic:baseline-send" />
    </button>
  </div>
</form>
