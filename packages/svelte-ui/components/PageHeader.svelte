<script lang="ts">
  export let heading;
  export let description;
</script>

<section class="bg-base-200  p-4">
  <div class=" prose prose-sm text-center mx-auto w-full">
    <h1 class=" text-center text-2xl w-fit mx-auto">{heading}</h1>
    <p>
      {description}
    </p>
  </div>
</section>

