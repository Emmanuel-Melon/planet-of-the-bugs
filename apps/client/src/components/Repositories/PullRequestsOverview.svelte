<script lang="ts">
  import dayjs from 'dayjs';

  export let pullRequests: Object[];
</script>

<section>
  <div class="space-y-4 flex flex-col justify-center gap-2">
    {#each pullRequests as { node: { title, author, commits, changedFiles, createdAt, labels, totalCommentsCount, url } }}
      <div class="flex items-center justify-between shadow p-2">
        <div class="flex flex-col justify-center gap-2">
          <h3 class="text-lg font-bold link-hover">
            <a href={url}>{title}</a>
          </h3>

          <div class="flex items-center gap-4 pl-2">
            <div class="flex items-center gap-1">
              <iconify-icon icon="ri:user-line" />
              <time class="text-gray-600">{author.name ?? author.login}</time>
            </div>
            <div class="flex items-center gap-1">
              <iconify-icon icon="ri:calendar-2-line" />
              <time class="text-gray-600"
                >{dayjs(createdAt).format('DD/MM/YYYY')}</time
              >
            </div>
          </div>

          <div class="flex items-center gap-4 pl-2">
            <div class="flex items-center gap-1">
              <iconify-icon icon="ri:discuss-line" />
              <time class="text-gray-600">{totalCommentsCount}</time>
            </div>
            <div class="flex items-center gap-1">
              <iconify-icon icon="ri:git-commit-line" />
              <span class="text-gray-600">{commits.totalCount}</span>
            </div>
            <div class="flex items-center gap-1">
              <iconify-icon icon="ri:file-edit-line" />
              <span class="text-gray-600">{changedFiles}</span>
            </div>
          </div>

          <div class="flex flex-wrap items-center gap-2">
            {#each labels.nodes as { name, description, color }}
              <div class="badge" style="background: #{color}">
                {name}
              </div>
            {/each}
          </div>
        </div>
      </div>
    {:else}
      <p>This Repo Has No Open Pull Requests</p>
    {/each}
  </div>
</section>
