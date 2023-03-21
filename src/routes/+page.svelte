<script>
// @ts-nocheck

  import {onMount} from 'svelte';
  import { PUBLIC_HASURA_ADMIN_SECRET } from "$env/static/public";
  import {
    ApolloClient,
    InMemoryCache,
    gql,
    createHttpLink,
    HttpLink,
  // @ts-ignore
  } from "@apollo/client/core/core.cjs";
  import { setClient, query, mutation } from "svelte-apollo";

  const httpLink = new HttpLink({
    uri: "https://planet-of-the-bugs.hasura.app/v1/graphql",
    credentials: "include",
    headers: {
      "x-hasura-admin-secret": PUBLIC_HASURA_ADMIN_SECRET,
    },
  });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    credentials: "include",
    link: httpLink,
  });

  setClient(client);

  const FETCH_COURSES = gql`query fetchCourses {
  courses {
    id
    name
    description
    creator
    complexity
  }
}`;

  const courses = query(FETCH_COURSES);

  onMount(async () => {
		courses.refetch();
	});

  $: courses.refetch();
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="text-column">
  <h1>Planet of The Bugs</h1>
  
  <div class='list'>
    {#if $courses.data}
    {#each $courses.data.courses as course}
      <div class='course'>
        <h3>{course.name}</h3>
        <p>Complexity: {course.complexity}</p>
        <p>{course.description}</p>
        <p>Creator: {course.creator}</p>
        <button class="btn btn-primary">Join Course</button>
      </div>
    {/each}
  {:else}
    <p>Loading...</p>
  {/if}
  </div>
</div>
