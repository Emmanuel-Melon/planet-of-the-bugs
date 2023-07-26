<script lang="ts">
  export let user;
  export let currentUser: Boolean;
</script>

<div class="card-actions justify-between">
  {#if currentUser}
    <div class="gap-2">
      <a href="/settings" class="btn btn-sm btn-primary gap-2">
        <iconify-icon icon="ri:equalizer-line" />
        Edit Profile
      </a>
      <a href="/authored" class="btn btn-sm btn-outline gap-2">
        <iconify-icon icon="ri:share-line" />
        Share</a
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
</div>
