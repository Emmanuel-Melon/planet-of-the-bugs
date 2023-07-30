<script>
  export let contributors = [
    {
      name: "Emmanuel Gatwech",
      bio: "Eman and the E is for Energy!",
      avatar: "https://avatars.githubusercontent.com/u/21015204?v=4",
      username: "Emmanuel-Melon"
    },
    {
      name: "Maged Faiz",
      bio: "Software Developer",
      avatar: "https://avatars.githubusercontent.com/u/91534137?v=4",
      username: "mainz27"
    },
    {
      name: "Leona Magaya",
      bio: "Data analyst with 2 years of experience. Python | SQL | Software Engineering Enthusiast | ALX Student",
      avatar: "https://avatars.githubusercontent.com/u/111906246?v=4",
      username: "leonamagaya"
    }
  ];
</script>

<section>
  <div class="space-y-4">
    {#each contributors as contributor}
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
            <div class="avatar">
                <div class="w-12 rounded-full">
                  <img src={contributor.avatar} alt={contributor.name} />
                </div>
              </div>
            <div>
                <div class="flex gap-2">
                  <h3 class="text-bold">{contributor.name}</h3>
                  <a href={`/${contributor.username}`} class="link">{contributor.username}</a>
                </div>
                <p class="text-gray-600">{contributor.bio}</p>
                <div class="flex gap-2">
                    <div class="badge badge-outline badge-secondary gap-2"><iconify-icon icon="ri:git-pull-request-line" /> 56 PRs</div>
                    <div class="badge badge-outline badge-secondary gap-2"><iconify-icon icon="ri:focus-line" /> 56 Issues</div>
                </div>
            </div>
        </div>
        <div>
            <button class="btn btn-sm btn-outline gap-2"><iconify-icon icon="ri:user-add-line" /> Connect</button>
        </div>
      </div>
    {/each}
  </div>
</section>
