<script lang="ts">
  import "iconify-icon";
  import Conversation from "$components/Chat/Conversation.svelte";
  export let data: PageData;
  console.log(data);
</script>

<section>
  <Conversation user={data.user} />
</section>
