<script lang="ts">
  import { Modal } from 'svelte-ui';
</script>

<Modal
  CTA="Invite A friend"
  icon="ri:share-line"
  id="invite"
  heading="Invite a Friend to slay bugs together"
  isOutline={true}
>
  <form>
    <div class="my-5 space-y-2">
      <label class="label" for="email">
        <span class="label-text"
          >Share Planet of the Bugs invitation with your friend via email</span
        >
      </label>
      <input class="input input-sm input-bordered w-full" placeholder="Enter Friend's email" id="email" />
    </div>
    <button class="btn btn-sm btn-primary">Invite</button>

    <div class="w-full">
      <label class="label" for="link">
        <span class="label-text"> Or invite them using this link </span>
      </label>

      <div class="flex items-center relative">
        <input readonly class="input input-sm input-bordered flex-1" id="link" />
        <button>
          <iconify-icon
            icon="ri:file-copy-line"
  
            class="absolute right-4 top-2"
          />
        </button>
      </div>
    </div>
  </form>
</Modal>
