<script>
  export let repo;
  import "iconify-icon";
</script>

<div class="card bg-gray-100 shadow-lg mb-2 basis-1/4">
  <div class="card-body">
    <div class="flex gap-4 items-center">
      <div class="flex gap-2">
        <h2 class="card-title">{repo.name.toLocaleUpperCase()}</h2>
        <a class="link link-secondary" href={repo.url}>{repo.name}</a>
      </div>
      <div>
        <div class="badge badge-primary gap-2">
          <iconify-icon icon="heroicons:star" />
          {repo.stargazerCount.toLocaleString()}
        </div>
      </div>
    </div>

    <p>{repo.description}</p>
    <div class="card-actions">
      <div class="bg-base-10 flex gap-2 p-1 items-center">
        <p>Never miss an update from your favorite GitHub repositories</p>
        <button class="btn btn-sm btn-accent gap-2">
          Watch Repo!
          <iconify-icon icon="heroicons:eye" />
        </button>
        </div>
    </div>
  </div>
</div>
