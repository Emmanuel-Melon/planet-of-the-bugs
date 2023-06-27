<script>
      import "iconify-icon";
    export let items = [];
</script>

<div class="dropdown dropdown-bottom dropdown-end cursor-pointer">
    <label tabindex="0" class="m-1"><slot /></label>
    <div tabindex="0" class="dropdown-content card card-compact w-96 shadow bg-base-100">
        <div class="card-body">
            <ul>
                {#each items as item}
                <li>{item.name}</li>
              {/each}
              <div class="card-actions justify-center items-center">
                <a href="/notifications" class="link">See All</a>
              </div>
            </ul>
        </div>
    </div>
  </div>