<script>
  import { onMount } from "svelte";
  // @ts-ignore
  import { gql } from "@apollo/client/core/core.cjs";
  import { query } from "svelte-apollo";
  import { page } from '$app/stores';

  let slug;

  const FETCH_COURSE_BY_SLUG = gql`
    query fetchCourseBySlug {
      courses(where: { name: { _eq: ${slug} } }) {
        complexity
        created_at
        creator
        description
        id
        name
        updated_at
      }
    }
  `;
  const course = query(FETCH_COURSE_BY_SLUG);

  onMount(async () => {
		course.refetch();
	});

  $: course.refetch();


onMount(() => {
  // Get the slug from the $page.params store
  slug = $page.params.slug;
});
  
</script>

<h1>Course Details Page</h1>
<p>The current slug is: {slug}</p>
