<script lang="ts">
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import { mutation } from "svelte-apollo";
  import { Button } from "svelte-ui";
  import { UPDATE_USER_TOPICS } from "$lib/graphql/mutations/users";
  import ManageReposTopicsModal from "$components/Modals/ManageReposTopicsModal.svelte";
  import RepoOverviewCard from "$components/Repositories/RepoOverviewCard.svelte";
  export let repositories: [];
  export let user: any;
  export let topics: [];
  export let repositoryCount: number;

  const update = mutation(UPDATE_USER_TOPICS);

  let currentPage = 1;
  let perPage = 2;
  let cursor: string;
  let pageSize = 6;
  $: totalPages = Math.ceil(repositoryCount / pageSize);

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
  let query = new URLSearchParams($page.url.searchParams);
  let queryString: string;
  

  const handlePagination = (direction: string) => {
    const pageInfo = $page.data?.repositories?.data?.pageInfo;

    if (direction === "end" && pageInfo.hasNextPage) {
      cursor = pageInfo.endCursor;
      currentPage += 1;
      query.set("page", currentPage.toString());
    } else if (direction === "start") {
      cursor = pageInfo.startCursor;
      currentPage -= 1;
      query.set("page", currentPage.toString());
    }
    query.set("cursor", cursor);

    // console.log(query.toString());
    queryString = query.toString()
    // goto(`?${query.toString()}`, { replaceState: true });
  };
  $: requestState;
  $: cursor;


  $: queryString;
  console.log(queryString);
</script>

<div class="basis-4/5 space-y-2">
  <div class="flex items-center justify-between">
    <p>
      {currentPage} of {totalPages} pages
    </p>
    <div class="flex gap-2">
      <ManageReposTopicsModal
        {topics}
        {user}
        {requestState}
        on:buttonClick={updateUserTopics}
      />
    </div>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-2">
    {#each repositories as edge}
      <RepoOverviewCard repo={edge?.node} {user} />
    {:else}
      <p>No repos</p>
    {/each}
  </div>
  <div class="flex gap-2 items-center">
    <a
      on:click={() => handlePagination("start")}
      href={`?${queryString}`}
    >
    <iconify-icon icon="ri:arrow-left-circle-line" height="15" width="15" />
      Previous
    </a>

    <a
      on:click={() => handlePagination("end")}
      href={`?${query.toString()}`}
    >
      Next
      <iconify-icon icon="ri:arrow-right-circle-line" height="15" width="15" />
    </a>
  </div>
</div>
