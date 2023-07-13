<script>
    import "iconify-icon";
    export let repositories;
    // export let user;
  </script>
  
  <div class="flex gap-2 basis-4/5 flex-wrap">
    {#each repositories as repo}
    <div class="card card-compact basis-2/5 grow bg-white shadow">
      <div class="card-body space-y-2">
        <h3 class="card-title">{repo?.repo_name}</h3>
        <div class="divider">Contributions</div>
        <div class="stats">          
          <div class="stat place-items-center">
            <div class="stat-title">Pull Requests</div>
            <div class="stat-value">4,200</div>
          </div>
          
          <div class="stat place-items-center">
            <div class="stat-title">Issues</div>
            <div class="stat-value">1,200</div>
          </div>
          
        </div>
        <div class="card-actions justify-start gap-2">
          <button class="btn btn-sm btn-outline gap-2"><iconify-icon icon="ri:close-line" /> Unsubscribe</button>
          <button class="btn btn-sm btn-primary gap-2"><iconify-icon icon="ri:settings-2-line" /> Manage</button>
        </div>
      </div>
    </div>
    {/each}
  </div>
  