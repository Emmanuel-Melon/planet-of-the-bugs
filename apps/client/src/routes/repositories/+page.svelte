<script lang="ts">
  export let data;
  import { PageHeader } from 'svelte-ui';

  import SidebarFilter from '$components/SidebarFilter.svelte';
  import RepositoryRecommendations from '$components/Repositories/RepositoryRecommendations.svelte';
  import { subscribedRepos } from './subscribedRepos.js';

  let { topics, user, repositories } = data;

  const criteria = [
    {
      id: 1,
      title: 'By Stars',
      icon: '',
    },
    {
      id: 2,
      title: 'By Open Issues',
      icon: 'material-symbols:lock-open',
    },
    {
      id: 3,
      title: 'By Pull Requests',
      icon: 'ph:git-pull-request-duotone',
    },
  ];
    
  subscribedRepos.set(user?.subscribedRepos)
</script>

<PageHeader
  description="Take your newly learned skills to the next level by practicing on
real-world issues from Github? By subscribing to a Github repo, you
can receive issues with labels that match your interests such as
language, bug, good-first-issue, or even bounty."
  heading="Practice makes perfect!"
/>

<section class="p-2">
  <div class="flex flex-col lg:flex-row gap-2">
    <div class="grow">
      <SidebarFilter CTA="Filter Repositories" {criteria} />
    </div>
    <RepositoryRecommendations
      repositories={repositories?.data?.edges}
      {user}
      {topics}
    />
  </div>
</section>
