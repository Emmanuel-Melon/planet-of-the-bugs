<script>
  const issues = [
    {
      id: 1,
      title: "Source Stripe: sync modified objects, not only created",
      description: "",
    },
    {
      id: 2,
      title: "Source Stripe: sync modified objects, not only created",
      description: "",
    },
    {
      id: 3,
      title: "Source Stripe: sync modified objects, not only created",
      description: "",
    }
  ];
</script>

<section class="w-3/4 mx-auto space-y-2">
  <div class="card bg-secondary p-4  w-full">
    <div class="prose">
        <h3>Issues</h3>
        <p>Enhance your coding skills by solving real-life issues from open-source repositories</p>
    
    </div>
    <div class="card p-2 flex bg-slate-100 gap-2 ">
        <div class="flex justify-evenly">
            <div class="form-control">
                <label class="label">
                  <span class="label-text">Pick based on complexity</span>
                </label>
                <select class="select select-sm w-full max-w-xs">
                  <option disabled selected>Easy</option>
                  <option>Auto</option>
                  <option>Dark mode</option>
                  <option>Light mode</option>
                </select>
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Pick based on complexity</span>
                </label>
                <select class="select select-sm w-full max-w-xs">
                  <option disabled selected>Easy</option>
                  <option>Auto</option>
                  <option>Dark mode</option>
                  <option>Light mode</option>
                </select>
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Pick based on complexity</span>
                </label>
                <select class="select select-sm w-full max-w-xs">
                  <option disabled selected>Easy</option>
                  <option>Auto</option>
                  <option>Dark mode</option>
                  <option>Light mode</option>
                </select>
              </div>
        </div>
    </div>
  </div>
  <div class="space-y-2">
    {#each issues as issue}
      <div class="card bg-white mx-auto shadow-md">
        <div class="card-body">
          <h3 class="card-title">{issue.title}</h3>
          <div class="card-actions justify-end items-end">
            <button class="btn btn-sm btn-primary">Contribute</button>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>
