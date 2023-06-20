<script lang="ts">
  export let user;
  export let currentUser: Boolean;
</script>

<div class="card-actions justify-between">
  {#if currentUser}
    <div class="gap-2">
      <a href="/settings" class="btn btn-sm btn-outline gap-2">
        <iconify-icon icon="ri:settings-3-line" />
        Settings
      </a>
      <a href="/authored" class="btn btn-sm btn-primary gap-2">
        <iconify-icon icon="ri:book-read-line" />
        Authored</a
      >
    </div>
  {:else}
    <div class="gap-2">
      <button class="btn btn-sm btn-outline gap-2">
        <iconify-icon icon="ri:chat-new-line" />
        Message
      </button>
      <button class="btn btn-sm btn-primary gap-2">
        <iconify-icon icon="ri:user-add-line" />
        Connect</button
      >
    </div>
  {/if}
  <div class="gap-2">
    <button class="btn btn-sm btn-outline btn-circle">
      <iconify-icon icon="ri:more-2-line" />
    </button>
  </div>
</div>
