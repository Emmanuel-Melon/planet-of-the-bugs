<script lang="ts">
  import { loggedInUserStore } from "./store";
  let user;

  loggedInUserStore.subscribe((value) => {
    user = value;
  });
</script>

<section class="w-full p-4">
  <slot />
</section>
