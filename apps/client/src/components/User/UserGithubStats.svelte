<script>
  import { Card } from "svelte-ui";
  export let repositoriesTotal;
  export let pullRequestsTotal;
  export let followersTotal;
  export let StarredTotal;
</script>

<div class=" w-full">
  <Card>
    <h2 class="card-title">Contributions Overview</h2>
    <div class="stats w-full">  
      <div class="stat place-items-center">
        <div class="stat-title">Repositories</div>
        <div class="stat-value">
          {repositoriesTotal}
        </div>
      </div>
  
      <div class="stat place-items-center">
        <div class="stat-title">Pull Requests</div>
        <div class="stat-value">
          {pullRequestsTotal}
        </div>
      </div>
  
      <div class="stat place-items-center">
        <div class="stat-title">Followers</div>
        <div class="stat-value">{followersTotal}</div>
      </div>
      <div class="stat place-items-center">
        <div class="stat-title">Starred Repositories</div>
        <div class="stat-value">
          {StarredTotal}
        </div>
      </div>
    </div>
  </Card>
</div>
