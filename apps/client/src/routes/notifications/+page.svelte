<script>
  import "iconify-icon";
  import { Card } from "svelte-ui"

  const notifications = [
  {
    id: 1,
    name: "Maged Faiz",
    avatar:
      "https://staticg.sportskeeda.com/editor/2021/12/d8fd2-16407278993535-1920.jpg",
    text: "Followed you",
    active: false,
  },
  {
    id: 2,
    name: "Leona Magaya",
    avatar:
      "https://m.media-amazon.com/images/M/MV5BMzcyZjYxYzktMWZhMi00ZGFkLTllMTEtNjJjZjU4ODdlYzRmXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
    text: "Invited you to connect",
    active: true,
  },
  {
    id: 3,
    name: "Ryuk",
    avatar:
      "https://cdn.europosters.eu/image/750/canvas-print-death-note-ryuk-checkered-i147611.jpg",
    text: "Sent you a message",
    active: false,
  },
];
</script>

<section class="p-2">
  <div class="w-4/5 mx-auto">
    <div class="flex justify-between items-center py-2 border-b-2 border-primary space-y-2">
      <div>
        <h1 class="flex items-center gap-2 text-xl">

          Notifications
        </h1>
      </div>
      <div class="flex items-center gap-2">
        <iconify-icon icon="ri:settings-3-line"  height="20" width="20" />
        <iconify-icon icon="ri:information-line" height="20" width="20"/>
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
              notification.active ? "bg-base-200 border-l-4 border-rose-900" : "bg-base-100"
            }`}
          >
            <div>
              <h3 class="text-bold">{notification.name}</h3>
              <p>{notification.text}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
