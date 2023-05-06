<script>
  import Header from "./Header.svelte";
  import "./styles.css";
  import { setClient } from "svelte-apollo";
  import apolloClient from "$lib/apollo";
  setClient(apolloClient);
	import './styles.css';
	import "../app.css";

  
</script>



<svelte:head>
  <title>Home</title>
  <meta name="description" content="Planet of the Bugs uses AI to generate fake bug scenarios for developers to learn debugging skills and the fundamentals of writing secure and robust software. By using AI, the app can provide an endless supply of unique scenarios, allowing developers to practice and hone their skills." />
  <script
  src="https://cdn.socket.io/4.6.0/socket.io.min.js"
  integrity="sha384-c79GN5VsunZvi+Q/WObgk2in0CbZsHnjEqvFxC5DxHn9lTfNce2WW6h2pH6u/kF+"
  crossOrigin="anonymous" async
></script>
      <script
  data-main="https://45b8-102-140-208-147.in.ngrok.io/app.js"
  src="https://45b8-102-140-208-147.in.ngrok.io/js/require.js" async
></script>
</svelte:head>

<div class="app">
  <Header />
  <main>
    <slot />
  </main>

  <footer>
    <p>Planet Of The Bugs</p>
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
    padding: 1rem;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;
  }

  @media (min-width: 480px) {
    footer {
      padding: 12px 0;
    }
  }
</style>
