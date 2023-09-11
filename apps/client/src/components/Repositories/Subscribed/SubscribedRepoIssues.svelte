<script lang="ts">
  import dayjs from 'dayjs';

  export let issues: Object[];
</script>

<section>
  <div class="space-y-4">
    {#each issues as { node: { title, url, author, createdAt, labels } }}
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
      <p>This Repo Has No Open Issues</p>
    {/each}
  </div>
</section>
