<script>
  import { Card } from "svelte-ui";
  const toggleOption = () => {};

  const options = [
    {
      id: 1,
      description: "When a new issue is created.",
      status: false,
    },
    {
      id: 2,
      description: "When my PR is merged!",
      status: true,
    },
    {
      id: 3,
      description: "When someone messages me!",
      status: false,
    },
  ];
</script>

<div class="basis-3/4 space-y-2">
  <Card title="Email Notifications">
    <p class="text-neutral-500 font-light">You will receive email notifications when the following happens:</p>
    <form>
      {#each options as { description, status }}
        <div class="form-control">
          <label class="label cursor-pointer">
            <span class="label-text">{description}</span>
            <input type="checkbox" class="toggle" checked={status} />
          </label>
        </div>
      {/each}
    </form>
  </Card>
  <Card title="Push Notifications">
    <p class="text-neutral-500 font-light">You will receive push notifications when the following happens:</p>
    <form>
      {#each options as { description, status }}
        <div class="form-control">
          <label class="label cursor-pointer">
            <span class="label-text">{description}</span>
            <input type="checkbox" class="toggle" checked={status} />
          </label>
        </div>
      {/each}
    </form>
  </Card>
</div>
