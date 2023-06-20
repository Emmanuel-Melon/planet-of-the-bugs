<script lang="ts">
  export let heading;
  export let description;
</script>

<div class="bg-base-200 w-full p-4">
  <div class="prose prose-sm w-full">
    <h1 class="text-2xl">{heading}</h1>
    <p>
      {description}
    </p>
  </div>
</div>
