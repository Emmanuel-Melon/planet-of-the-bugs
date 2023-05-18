<script>
  let text = "";

  function handleMessage() {
    console.log(`hello: ${text}`);
  }
</script>

<form on:submit|preventDefault={handleMessage}>
  <div class="flex justify-between gap-2 items-center p-2">
    <textarea
      placeholder="Start a new message"
      class="flex textarea px-4 textarea-bordered textarea-xs w-full"
      bind:value={text}
    />
    <button
      class="btn btn-md btn-primary flex items-center gap-2"
      type="submit"
    >
      <iconify-icon icon="ic:baseline-send" /> Send</button
    >
  </div>
</form>
