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
    <div class="my-5">
      <label class="label">
        <span class="label-text"
          >Share Planet of the Bugs invitation with your friend via email</span
        >
      </label>
      <input class="input input-bordered" placeholder="Enter Friend's email" />
      <button class="btn btn-primary">Invite</button>
    </div>

    <div class="w-full">
      <label class="label">
        <span class="label-text"> Or invite them using this link </span>
      </label>

      <div class="flex relative">
        <input readonly class="input input-bordered flex-1" />
        <button>
          <iconify-icon
            icon="ri:file-copy-line"
            width="20"
            height="20"
            class="absolute right-4 top-4"
          />
        </button>
      </div>
    </div>
  </form>
</Modal>
