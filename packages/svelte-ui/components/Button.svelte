<script lang="ts">
  import 'iconify-icon';
  export let bg: string = 'primary';
  export let size: string = 'sm';
  export let icon: string = null;
  export let CTA: string;
  export let isOutline: boolean = false;
  export let onClick: Function;

  let isProcessing: boolean = false;

  const handleClick = async () => {
    isProcessing = true;
    await onClick().then(() => {
      isProcessing = false;
    });
  };

  $: isProcessing;
</script>

<button
  class={isOutline
    ? `btn btn-outline btn-${size} gap-2`
    : `btn btn-${bg} btn-${size} gap-2`}
  on:click|preventDefault={handleClick}
>
  {#if isProcessing}
    <span class="loading loading-spinner animate-spin" />
  {:else}
    {#if icon}
      <iconify-icon {icon} />
    {/if}
    {CTA}
  {/if}
</button>

<style>
  .loading-spinner {
    -webkit-mask-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHN0cm9rZT0nIzAwMCcgdmlld0JveD0nMCAwIDI0IDI0JyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxzdHlsZT4uc3Bpbm5lcl9WOG0xe3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyO2FuaW1hdGlvbjpzcGlubmVyX3pLb2EgMnMgbGluZWFyIGluZmluaXRlfS5zcGlubmVyX1Y4bTEgY2lyY2xle3N0cm9rZS1saW5lY2FwOnJvdW5kO2FuaW1hdGlvbjpzcGlubmVyX1lwWlMgMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZX1Aa2V5ZnJhbWVzIHNwaW5uZXJfektvYXsxMDAle3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19QGtleWZyYW1lcyBzcGlubmVyX1lwWlN7MCV7c3Ryb2tlLWRhc2hhcnJheTowIDE1MDtzdHJva2UtZGFzaG9mZnNldDowfTQ3LjUle3N0cm9rZS1kYXNoYXJyYXk6NDIgMTUwO3N0cm9rZS1kYXNob2Zmc2V0Oi0xNn05NSUsMTAwJXtzdHJva2UtZGFzaGFycmF5OjQyIDE1MDtzdHJva2UtZGFzaG9mZnNldDotNTl9fTwvc3R5bGU+PGcgY2xhc3M9J3NwaW5uZXJfVjhtMSc+PGNpcmNsZSBjeD0nMTInIGN5PScxMicgcj0nOS41JyBmaWxsPSdub25lJyBzdHJva2Utd2lkdGg9JzMnPjwvY2lyY2xlPjwvZz48L3N2Zz4=);
    mask-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHN0cm9rZT0nIzAwMCcgdmlld0JveD0nMCAwIDI0IDI0JyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxzdHlsZT4uc3Bpbm5lcl9WOG0xe3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyO2FuaW1hdGlvbjpzcGlubmVyX3pLb2EgMnMgbGluZWFyIGluZmluaXRlfS5zcGlubmVyX1Y4bTEgY2lyY2xle3N0cm9rZS1saW5lY2FwOnJvdW5kO2FuaW1hdGlvbjpzcGlubmVyX1lwWlMgMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZX1Aa2V5ZnJhbWVzIHNwaW5uZXJfektvYXsxMDAle3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19QGtleWZyYW1lcyBzcGlubmVyX1lwWlN7MCV7c3Ryb2tlLWRhc2hhcnJheTowIDE1MDtzdHJva2UtZGFzaG9mZnNldDowfTQ3LjUle3N0cm9rZS1kYXNoYXJyYXk6NDIgMTUwO3N0cm9rZS1kYXNob2Zmc2V0Oi0xNn05NSUsMTAwJXtzdHJva2UtZGFzaGFycmF5OjQyIDE1MDtzdHJva2UtZGFzaG9mZnNldDotNTl9fTwvc3R5bGU+PGcgY2xhc3M9J3NwaW5uZXJfVjhtMSc+PGNpcmNsZSBjeD0nMTInIGN5PScxMicgcj0nOS41JyBmaWxsPSdub25lJyBzdHJva2Utd2lkdGg9JzMnPjwvY2lyY2xlPjwvZz48L3N2Zz4=);
  }

  .loading {
    pointer-events: none;
    display: inline-block;
    aspect-ratio: 1/1;
    width: 1.5rem;
    background-color: currentColor;
    -webkit-mask-size: 100%;
    mask-size: 100%;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-position: center;
    mask-position: center;
    -webkit-mask-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHN0cm9rZT0nIzAwMCcgdmlld0JveD0nMCAwIDI0IDI0JyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxzdHlsZT4uc3Bpbm5lcl9WOG0xe3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyO2FuaW1hdGlvbjpzcGlubmVyX3pLb2EgMnMgbGluZWFyIGluZmluaXRlfS5zcGlubmVyX1Y4bTEgY2lyY2xle3N0cm9rZS1saW5lY2FwOnJvdW5kO2FuaW1hdGlvbjpzcGlubmVyX1lwWlMgMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZX1Aa2V5ZnJhbWVzIHNwaW5uZXJfektvYXsxMDAle3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19QGtleWZyYW1lcyBzcGlubmVyX1lwWlN7MCV7c3Ryb2tlLWRhc2hhcnJheTowIDE1MDtzdHJva2UtZGFzaG9mZnNldDowfTQ3LjUle3N0cm9rZS1kYXNoYXJyYXk6NDIgMTUwO3N0cm9rZS1kYXNob2Zmc2V0Oi0xNn05NSUsMTAwJXtzdHJva2UtZGFzaGFycmF5OjQyIDE1MDtzdHJva2UtZGFzaG9mZnNldDotNTl9fTwvc3R5bGU+PGcgY2xhc3M9J3NwaW5uZXJfVjhtMSc+PGNpcmNsZSBjeD0nMTInIGN5PScxMicgcj0nOS41JyBmaWxsPSdub25lJyBzdHJva2Utd2lkdGg9JzMnPjwvY2lyY2xlPjwvZz48L3N2Zz4=);
    mask-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHN0cm9rZT0nIzAwMCcgdmlld0JveD0nMCAwIDI0IDI0JyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxzdHlsZT4uc3Bpbm5lcl9WOG0xe3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyO2FuaW1hdGlvbjpzcGlubmVyX3pLb2EgMnMgbGluZWFyIGluZmluaXRlfS5zcGlubmVyX1Y4bTEgY2lyY2xle3N0cm9rZS1saW5lY2FwOnJvdW5kO2FuaW1hdGlvbjpzcGlubmVyX1lwWlMgMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZX1Aa2V5ZnJhbWVzIHNwaW5uZXJfektvYXsxMDAle3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19QGtleWZyYW1lcyBzcGlubmVyX1lwWlN7MCV7c3Ryb2tlLWRhc2hhcnJheTowIDE1MDtzdHJva2UtZGFzaG9mZnNldDowfTQ3LjUle3N0cm9rZS1kYXNoYXJyYXk6NDIgMTUwO3N0cm9rZS1kYXNob2Zmc2V0Oi0xNn05NSUsMTAwJXtzdHJva2UtZGFzaGFycmF5OjQyIDE1MDtzdHJva2UtZGFzaG9mZnNldDotNTl9fTwvc3R5bGU+PGcgY2xhc3M9J3NwaW5uZXJfVjhtMSc+PGNpcmNsZSBjeD0nMTInIGN5PScxMicgcj0nOS41JyBmaWxsPSdub25lJyBzdHJva2Utd2lkdGg9JzMnPjwvY2lyY2xlPjwvZz48L3N2Zz4=);
  }
</style>
