<script lang="ts">
  export let heading;
  export let description;
</script>

<section class="body text-white p-4">
  <div class="prose prose-sm text-center mx-auto w-full">
    <h1 class="text-center text-2xl w-fit mx-auto">{heading}</h1>
    <p>
      {description}
    </p>
  </div>
</section>


<style>
  .body {
    background: #00467F;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #A5CC82, #00467F);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #A5CC82, #00467F); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


  }
</style>