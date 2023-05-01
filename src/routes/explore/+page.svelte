<script>
  export let data;
  import { page } from "$app/stores";
  import { onMount, onDestroy } from "svelte";
  import RepoOverviewCard from "$components/Repositories/RepoOverviewCard.svelte";
  import LessonCreator from "$components/Lessons/LessonCreator.svelte";
  import ContributionsStats from "$components/User/ContributionsStats.svelte";
  import PaginationComponent from "$components/PaginationComponent.svelte";
  let user;

  onMount(() => {
    user = $page.data.session?.user;
  });
</script>

<main class="p-4">
  <div class="flex card bg-primary shadow-lg mb-4 p-4">

    <div class="avatar">
      <div
        class="w-16 rounded-xl ring ring-accent ring-offset-base-100 ring-offset-2"
      >
        <img src="https://res.cloudinary.com/dwacr3zpp/image/upload/v1682868697/Planet%20of%20The%20Bugs/Untitled_design_4.png" alt="github logo" />
      </div>
    </div>
    <h1 class="prose lg:prose-xl">Explore The Planet</h1>
    <p>
      Storybook is a frontend workshop for building UI components and pages in
      isolation. Made for UI development, testing, and documentation.
    </p>
  </div>
  <section>
    <div class="flex gap-2">
      <div class="min-h-full flex-1">
        <ContributionsStats user={user} />
      </div>
      <div class="flex-2 flex-wrap">
        {#each data?.pullRequests?.edges as edge}
          <RepoOverviewCard repo={edge?.node} />
        {/each}
      </div>
    </div>
  </section>
<PaginationComponent />
</main>
