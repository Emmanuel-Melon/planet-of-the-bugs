<script>
  import Header from "./Header.svelte";
  import "./styles.css";
  import { setClient } from "svelte-apollo";
  import apolloClient from "$lib/apollo";
  setClient(apolloClient);
	import './styles.css';
	import "../app.css";
</script>

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
