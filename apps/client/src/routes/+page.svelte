<script>
  import { signIn, signOut } from "@auth/sveltekit/client";
  import { Card, Button } from "svelte-ui";
  import { page } from "$app/stores";
  import { onMount, onDestroy } from "svelte";
  import { query } from "svelte-apollo";
  import { FETCH_COURSES } from "$lib/graphql/queries/courses";
  import ContributionsStats from "$components/User/ContributionsStats.svelte";
  let user;
  import "iconify-icon";
  import { PageHeader } from "svelte-ui";

  import ChoicesPanes from "$components/ChoicesPanes.svelte";

  const courses = query(FETCH_COURSES);

  onMount(async () => {
    courses.refetch();
  });
  $: courses.refetch();

  onMount(() => {
    user = $page.data.session?.user;
  });
</script>

<svelte:head>
  <title>Home</title>
  <meta
    name="description"
    content="Planet of the Bugs uses AI to generate fake bug scenarios for developers to learn debugging skills and the fundamentals of writing secure and robust software. By using AI, the app can provide an endless supply of unique scenarios, allowing developers to practice and hone their skills."
  />
</svelte:head>
<PageHeader
  description="Get ready to sharpen your debugging skills, exchange knowledge, and have a blast along the way."
  heading={`Welcome Back, ${user?.name}`}
/>
<section class="p-4">
  <div>
    <div class="mb-4">
      <h3 class="flex items-center gap-2">
        <iconify-icon icon="ri:graduation-cap-line" />
        Continue Learning
      </h3>
    </div>
    <Card title="Introduction to Debugging">
      <progress class="progress progress-success w-56" value="70" max="100" />
      <div class="card-actions justify-end gap-2">
        <button class="btn btn-sm btn-primary">Resume Course</button>
      </div>
    </Card>
  </div>
</section>

<section class="p-4">
  <div class="space-y-2">
    <div class="flex justify-between items-center">
      <h3 class="flex items-center gap-2">
        <iconify-icon icon="ri:git-repository-line" />
        Subscribed Repositories
      </h3>
      <div>
        <a href="/repositories/subscribed" class="link">See all</a>
      </div>
    </div>
  </div>
  <div class="flex items-center gap-2 space-y-2">
    <Card title="Subscribed Repositories">
      <div class="card-actions justify-end gap-2">
        <button class="btn btn-sm btn-primary">Contribute</button>
      </div>
    </Card>
    <Card title="Subscribed Repositories">
      <div class="card-actions justify-end gap-2">
        <button class="btn btn-sm btn-primary">Contribute</button>
      </div>
    </Card>
    <Card title="Subscribed Repositories">
      <div class="card-actions justify-end gap-2">
        <button class="btn btn-sm btn-primary">Contribute</button>
      </div>
    </Card>
  </div>

</section>
