<script>
  export let user;
  export let showUser;
  export let orientation = "stats-vertical";

console.log(user);
</script>

<div class={`stats ${orientation} bg-white w-full shadow-lg border-solid border-e border-accent`}>
  {#if user && showUser}
    <div class="flex items-center gap-2 p-4 bg-white">
      <div class="avatar">
        <div
          class="w-16 rounded-xl ring ring-accent ring-offset-base-100 ring-offset-2"
        >
          <img src={user.image} alt={user.name} />
        </div>
      </div>
      <div>
        <h3 class="prose lg:prose-md">{user.name}</h3>
      </div>
    </div>
  {/if}
  <div class="stat place-items-center">
    <div class="stat-title">Followed Repositories</div>
    <div class="stat-value">31</div>
  </div>

  <div class="stat place-items-center">
    <div class="stat-title">Total Contributions</div>
    <div class="stat-value">4,200</div>
    <div class="stat-desc">↗︎ 400 (22%)</div>
  </div>

  <div class="stat place-items-center">
    <div class="stat-title">Pull Requests</div>
    <div class="stat-value">1,200</div>
    <div class="stat-desc">↘︎ 90 (14%)</div>
  </div>
  <div class="stat place-items-center">
    <div class="stat-title">Issues Created</div>
    <div class="stat-value">1,200</div>
    <div class="stat-desc">↘︎ 90 (14%)</div>
  </div>
</div>
