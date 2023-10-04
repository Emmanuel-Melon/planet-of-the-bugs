<script lang="ts">
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import { mutation } from "svelte-apollo";
  import { UPDATE_USER_TOPICS } from "$lib/graphql/mutations/users";
  import ManageReposTopicsModal from "$components/Modals/ManageReposTopicsModal.svelte";
  import RepoOverviewCard from "$components/Repositories/RepoOverviewCard.svelte";
  export let repositories: [];
  export let user: any;
  export let topics: [];

  const update = mutation(UPDATE_USER_TOPICS);

  let currentPage = 1;
  let perPage = 2;
  let cursor: string;
  function getCurrentPageItems() {
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;
    return repositories.slice(startIndex, endIndex);
  }
  
  const updateUserTopics = async (event) => {
    requestState = "processing";
    try {
      const result = await update({
        variables: {
          userTopics: JSON.stringify(event.detail),
          uid: user?.id,
        },
      });
      requestState = "completed";
      console.log("User Topics updated!");
      goto(location.href, { replaceState: true, noScroll: true });
    } catch (error) {
      requestState = "completed";
      console.log(error);
    }
  };

  let requestState = "idle";
  $: requestState;
  $: cursor;

  const handlePagination = (direction: string) => {
    const pageInfo = $page.data?.repositories?.data?.pageInfo;
    if(direction === "end" && pageInfo.hasNextPage) {
      cursor = pageInfo.endCursor;
      currentPage++;
    } else if (direction === "start") {
      cursor = pageInfo.startCursor;
      currentPage--;
    }
    goto(`?page=${currentPage}&cursor=${cursor}`);
  }
</script>

<div class="basis-4/5 space-y-2">

  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-2">
    {#each repositories as edge}
      <RepoOverviewCard repo={edge?.node} {user} />
    {:else}
      <p>No repos</p>
    {/each}
  </div>
  <div class="flex gap-2 items-center">
    <button class="btn btn-sm btn-outline" on:click={() => handlePagination("start")}>Previous</button>
    <button class="btn btn-sm btn-outline" on:click={() => handlePagination("end")}>Next</button>
  </div>
</div>
