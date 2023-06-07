<script>
  import "iconify-icon";

  const notifications = [
    {
      id: 1,
      name: "Gyomei Himejima",
      avatar:
        "https://staticg.sportskeeda.com/editor/2021/12/d8fd2-16407278993535-1920.jpg",
      text: "We are proud to live and die as human beings.",
      active: false,
    },
    {
      id: 2,
      name: "Muzan Kibutsuji",
      avatar:
        "https://m.media-amazon.com/images/M/MV5BMzcyZjYxYzktMWZhMi00ZGFkLTllMTEtNjJjZjU4ODdlYzRmXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
      text: "Prepare to witness the true terror of the Demong King!",
      active: true,
    },
    {
      id: 3,
      name: "Ryuk",
      avatar:
        "https://cdn.europosters.eu/image/750/canvas-print-death-note-ryuk-checkered-i147611.jpg",
      text: "Hahahahaha",
      active: false,
    },
  ];
</script>

<section class="card bg-white md:w-4/5 mx-auto border-2 border-gray-200 shadow-xl h-96">
  <div class="flex justify-between items-center p-4 border-b-2 border-gray-100">
    <div>
      <h1 class="flex items-center gap-2">
        <iconify-icon icon="heroicons:bell-alert-20-solid" />
        Notifications
      </h1>
    </div>
    <div class="flex items-center gap-2">
      <iconify-icon icon="heroicons:adjustments-vertical-20-solid" />
      <iconify-icon icon="heroicons:information-circle-solid" />
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
    <div>
      {#each notifications as notification}
        <div
          class={`flex items-center gap-2 mb-1 hover:bg-gray-200 cursor-pointer p-2 ${
            notification.active ? "bg-zinc-100 border-r-4 border-primary" : "bg-white"
          }`}
        >
          <div class="avatar">
            <div
              class="w-12  mask mask-squircle"
            >
              <img src={notification.avatar} alt={notification.name} />
            </div>
          </div>
          <div>
            <h4>{notification.name}</h4>
            <p>{notification.text}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
