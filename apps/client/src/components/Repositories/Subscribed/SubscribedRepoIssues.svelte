<script>
  export let contributors = [
    {
      name: "Emmanuel Gatwech",
      bio: "Eman and the E is for Energy!",
      avatar: "https://avatars.githubusercontent.com/u/21015204?v=4"
    },
    {
      name: "Maged Faiz",
      bio: "Software Developer",
      avatar: "https://avatars.githubusercontent.com/u/91534137?v=4"
    },
    {
      name: "Leona Magaya",
      bio: "Data analyst with 2 years of experience. Python | SQL | Software Engineering Enthusiast | ALX Student",
      avatar: "https://avatars.githubusercontent.com/u/111906246?v=4"
    }
  ];
</script>

<section>
  <div class="space-y-4">
    {#each contributors as contributor}
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
            <div>
                <h3 class="text-bold">{contributor.name}</h3>
                <p class="text-gray-600">{contributor.bio}</p>
                <div class="flex">
                    <div class="badge badge-secondary gap-2"><iconify-icon icon="ri:git-pull-request-line" /> 56 PRs</div>
                </div>
            </div>
        </div>
      </div>
    {/each}
  </div>
</section>
