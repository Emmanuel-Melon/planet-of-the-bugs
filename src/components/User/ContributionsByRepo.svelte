<script>
  import { GET_CONTRIBUTIONS_BY_REPO, GET_USER_PULL_REQUEST_CONTRIBUTIONS } from "$lib/queries/repositories";
  export let repository;
  export let user;
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import { githubClient } from "$lib/apollo";
  // let contributions;

  // console.log(repository);
  // console.log(repository.nameWithOwner.split("/")[0]);
  // console.log(user);

  const getContributions = async () => {
    const { data } = await githubClient.query({
      query: GET_CONTRIBUTIONS_BY_REPO,
      variables: {
        author: user.login,
        name: repository.name,
        owner: repository.nameWithOwner.split("/")[0],
      },
    });
    return { contributions: data?.repository };
  };

  const getPullRequestContributions = async () => {
    const { data } = await githubClient.query({
      query: GET_USER_PULL_REQUEST_CONTRIBUTIONS,
      variables: {
        author: user.login,
      },
    });

    return { pullRequests: data?.user };
  };

  const contributionsStore = writable(null);
  const pullRequestContributionsStore = writable(null);

  onMount(async () => {
    const { contributions } = await getContributions();
    contributionsStore.set(contributions);
  });

  onMount(async () => {

    const { pullRequests } = await getPullRequestContributions();

    pullRequestContributionsStore.set(pullRequests);


    
  });

  const executeFunction = () => {
    
    if ($pullRequestContributionsStore) {
        console.log("professor");
        // const { contributions } = $pullRequestContributionsStore;
  console.log('Pull Requests', $pullRequestContributionsStore);
    } else {
        console.log("why");
        console.log($pullRequestContributionsStore)
    }
  };

  setTimeout(executeFunction, 15000);

  //const { issues, pullRequests} = $contributions?.contributions;
  //console.log(pullRequests);
  //console.log(issues);
</script>

{#if $contributionsStore}
  <p>Contributions: {$contributionsStore.pullRequests.totalCount}</p>

<div class="divider">Contributions</div>
<div class="stats bg-white text-primary-content">
  <div class="stat">
    <div class="stat-title">Pull Requests</div>
    <div class="stat-value">{$contributionsStore.pullRequests.totalCount}</div>
    <div class="stat-actions">
      <div class="badge badge-md bg-accent">57 Merged</div>
      <div class="badge badge-md badge-error">23 Closed</div>
    </div>
  </div>

  <div class="stat ">
    <div class="stat-title">Issues</div>
    <div class="stat-value">{$contributionsStore.issues.totalCount}</div>
    <div class="stat-actions">
      <div class="badge badge-md bg-green-500">{$contributionsStore.openedIssues.totalCount} Opened</div>
      <div class="badge badge-md bg-red-500">{$contributionsStore.closedIssues.totalCount} Closed</div>
    </div>
  </div>
</div>
{/if}