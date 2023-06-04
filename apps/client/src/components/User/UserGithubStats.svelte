<script>
  export let user;
</script>

<div class="card card-compact bg-base-100 w-full shadow">
  <div class="card-body">
    <h2 class="card-title">Contributions Overview</h2>
    <div class="stats shadow bg-base-200 w-full">
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
  </div>
</div>
