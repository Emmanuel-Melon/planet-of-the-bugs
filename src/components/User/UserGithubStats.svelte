<script>
  export let user;
</script>

<section class="bg-white w-full p-4 border-e shadow-sm border-2 border-secondary">
  <div class="mt-2 mb-2">
    <h3 class="text-lg">Contributions Overview</h3>
  </div>
  <div class="stats shadow bg-white w-full">
    <div class="stat place-items-center">
      <div class="stat-title">Contributed To</div>
      <div class="stat-value">
        {user.repositories.totalCount}
      </div>
    </div>

    <div class="stat place-items-center">
      <div class="stat-title">Owned Repositories</div>
      <div class="stat-value">
        {user.repositories.totalCount}
      </div>
    </div>

    <div class="stat place-items-center">
      <div class="stat-title">Pull Requests</div>
      <div class="stat-value text-secondary">
        {user.pullRequests.totalCount}
      </div>
    </div>

    <div class="stat place-items-center">
      <div class="stat-title">Followers</div>
      <div class="stat-value">{user.followers.totalCount}</div>
    </div>
    <div class="stat place-items-center">
      <div class="stat-title">Starred Repositories</div>
      <div class="stat-value">
        {user.starredRepositories.totalCount}
      </div>
    </div>
  </div>
</section>
