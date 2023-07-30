<script lang="ts">
  export let heading;
  export let description;
</script>

<section class="bg-rose-900 text-white p-4">
  <div class="text-white prose prose-sm text-center mx-auto w-full">
    <h1 class="text-white text-center text-2xl w-fit mx-auto">{heading}</h1>
    <p>
      {description}
    </p>
  </div>
</section>

