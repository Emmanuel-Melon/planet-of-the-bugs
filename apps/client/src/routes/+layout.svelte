<script>
  import Header from "./Header.svelte";
  import "./styles.css";
  import { setClient } from "svelte-apollo";
  import apolloClient from "$lib/graphql/apolloClient";
  import "../app.css";
  setClient(apolloClient);
  import "iconify-icon";

  //     { text: "About", path: "/about", icon: "ri:information-line" },
  
</script>

<svelte:head>
  <title>Home</title>
  <meta
    name="description"
    content="Planet of the Bugs uses AI to generate fake bug scenarios for developers to learn debugging skills and the fundamentals of writing secure and robust software. By using AI, the app can provide an endless supply of unique scenarios, allowing developers to practice and hone their skills."
  />
</svelte:head>

<svelte:window
    on:sveltekit:navigation-start={() => {
        console.log('Navigation started!');
    }}
    on:sveltekit:navigation-end={() => {
        console.log('Navigation ended!');
    }}
    
/>

<div class="app space-y-2">
  <Header />
  <main class="space-y-4">
    <slot />
  </main>
  <footer class="flex items-center justify-center p-2 bg-base-200">
    <div class="flex gap-2">
      <a class="link" href="/support">Support</a>
      <a class="link" href="/support">Contribute</a>
      <a class="link" href="/about">About</a>
    </div>
  </footer>
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
