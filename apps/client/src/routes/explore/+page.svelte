<script>
  export let data;
  import { page } from "$app/stores";
  import { onMount, onDestroy } from "svelte";

  import LessonCreator from "$components/Lessons/LessonCreator.svelte";
  import ContributionsStats from "$components/User/ContributionsStats.svelte";
  import PaginationComponent from "$components/PaginationComponent.svelte";
  import SidebarFilter from "$components/SidebarFilter.svelte";
  import RepositoryRecommendations from "$components/Repositories/RepositoryRecommendations.svelte";
  let user;

  onMount(() => {
    user = $page.data.session?.user;
  });

  const criteria = [
    {
      id: 1,
      title: "By Stars",
      icon: "",
    },
    {
      id: 2,
      title: "By Open Issues",
      icon: "material-symbols:lock-open",
    },
    {
      id: 3,
      title: "By Pull Requests",
      icon: "ph:git-pull-request-duotone",
    },
  ];
</script>

<main>
  <div
    class="card bg-white w-full shadow-lg mb-2 p-4"
  >
    <div class="flex flex-col md:flex-row justify-center items-center">
      <div class="avatar">
        <div class="w-24">
          <img
            src="https://res.cloudinary.com/dwacr3zpp/image/upload/v1682868697/Planet%20of%20The%20Bugs/Untitled_design_4.png"
            alt="github logo"
          />
        </div>
      </div>
      <div>
        <h1 class="prose prose-xl">Practice makes perfect!</h1>
        <p>
          Take your newly learned skills to the next level by practicing on
          real-world issues from Github? By subscribing to a Github repo, you
          can receive issues with labels that match your interests such as
          language, bug, good-first-issue, or even bounty.
        </p>
      </div>
    </div>
  </div>
  <section class="mt-2">
    <div class="flex flex-col lg:flex-row gap-2">
      <div class="grow">
        <SidebarFilter CTA="Filter Repositories" {criteria} />
      </div>
      <RepositoryRecommendations
        repositories={data.repositories?.data?.edges}
        user={data.repositories?.user}
      />
    </div>
  </section>
  <PaginationComponent />
</main>
