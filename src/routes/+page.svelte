<script>
  import { PUBLIC_HASURA_ADMIN_SECRET } from '$env/static/public'
  import {
    ApolloClient,
    InMemoryCache,
    gql,
    createHttpLink,
    HttpLink,
  } from "@apollo/client/core";
  import { setClient, query, mutation } from "svelte-apollo";

  export let authToken;

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

  const LANGUAGES_QUERY = gql`
    query fetchLanguages {
      languagues {
        created_at
        id
        name
        updated_at
      }
    }
  `;

  const languages = query(LANGUAGES_QUERY);

  function reload() {
    languages.refetch();
  }
  $: languages.refetch();

</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="text-column">
  <h1>Planet of The Bugs</h1>
  <button on:click={reload}>Fetch</button>

</div>
