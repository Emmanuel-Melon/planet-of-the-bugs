<script lang="ts">
  export let heading;
  export let description;
</script>

<div class="card card-compact bg-base-200 w-full">
  <div class="card-body">
    <div class="prose prose-sm text-center mx-auto w-full">
      <h1 class="text-center text-2xl w-fit mx-auto">{heading}</h1>
      <p>
        {description}
      </p>
    </div>
  </div>
</div>
