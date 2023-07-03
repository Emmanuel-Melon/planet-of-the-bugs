<script lang="ts">
  import "./styles.css";
  import "../app.css";
  import Header from "./Header.svelte";
  import { setClient } from "svelte-apollo";
  import apolloClient from "$lib/graphql/apolloClient";
  import "iconify-icon";
  import Footer from "$components/Footer.svelte";
  setClient(apolloClient);
</script>

<svelte:head>
  <title>Planet of the Bugs</title>
  <meta
    name="description"
    content="Planet of the Bugs uses AI to generate fake bug scenarios for developers to learn debugging skills and the fundamentals of writing secure and robust software. By using AI, the app can provide an endless supply of unique scenarios, allowing developers to practice and hone their skills."
  />
</svelte:head>

<svelte:window
  on:sveltekit:navigation-start={() => {
    console.log("Navigation started!");
  }}
  on:sveltekit:navigation-end={() => {
    console.log("Navigation ended!");
  }}
/>

<div class="app">
  <Header />
  <main class="space-y-4">
    <slot />
  </main>
  <Footer />
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
  }

  @media (min-width: 480px) {
  }
</style>
