<script>
  /**
   * @type {string[]}
   */
  let reversed;
  /**
   * @param {string} str
   */
  function reverseArrayStrings(str) {
    reversed = str.split(" ").map((word) => word.split("").reverse().join(""));
  }
  let str = "Sometimes in life the Gods smile upon you my friend!";

  // console.log(split);
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="text-column">
  <h1>Planet of The Bugs</h1>

  <p>{str}</p>

  <p>{reversed?.length > 0 ? reversed : null}</p>
  <button on:click={() => reverseArrayStrings(str)}>Reverse String</button>
</div>
