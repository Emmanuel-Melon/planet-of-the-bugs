<script>
  export let repo;
  import "iconify-icon";
  console.log(repo);
</script>

<div class="card w-96 bg-gray-100 shadow-lg">
  <div class="card-body">
    <div class="flex justify-between">
      <div>
        <h2 class="card-title">{repo.name}</h2>
        <a class="link" href={repo.url}>{repo.name}</a>
      </div>
      <div>
        <div class="badge badge-accent gap-2">
          <iconify-icon icon="heroicons:star" />
          {repo.stargazerCount.toLocaleString()}
        </div>
      </div>
    </div>
    <p>{repo.description}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-sm btn-primary gap-2">
        Follow
        <iconify-icon icon="heroicons:folder-plus" />
      </button>
    </div>
  </div>
</div>
