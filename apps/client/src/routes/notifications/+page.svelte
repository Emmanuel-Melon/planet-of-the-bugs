<script>
  import "iconify-icon";
  import { Card } from "svelte-ui"


</script>

<section class="p-2">

  <Card>
    <div class="flex justify-between items-center">
      <div>
        <h1 class="flex items-center gap-2 text-xl">
          <iconify-icon icon="ri:notification-line"  />
          Notifications
        </h1>
      </div>
      <div class="flex items-center gap-2">
        <iconify-icon icon="ri:settings-5-line"  height="25" width="25" />
        <iconify-icon icon="ri:information-line" height="25" width="25"/>
      </div>
    </div>
    <div class="basis-3/4">
      {#if false}
        <div>
        <h3>No notifications yet!</h3>
        <p>
          It looks like you haven't received any notifications yet. Check back
          later!
        </p>
      </div>
      {/if}
      <div class="space-y-2">
        {#each notifications as notification}
          <div
            class={`flex items-center gap-2 cursor-pointer p-2 ${
              notification.active ? "bg-base-200 border-l-4 border-primary" : "bg-base-100"
            }`}
          >
            <div class="avatar">
              <div
                class="w-12 mask mask-squircle shadow"
              >
                <img src={notification.avatar} alt={notification.name} />
              </div>
            </div>
            <div>
              <h3 class="text-bold">{notification.name}</h3>
              <p>{notification.text}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </Card>
</section>
