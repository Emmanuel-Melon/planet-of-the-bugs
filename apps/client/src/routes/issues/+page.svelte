<script>
  const issues = [
    {
      id: 1,
      title: "Analyze and recommend GitHub issues via MindsDB",
      description: "",
    },
    {
      id: 2,
      title: "Execute code from Monaco Editor",
      description: "",
    },
    {
      id: 3,
      title: " Mark Course as Completed",
      description: "",
    },
  ];
  import "iconify-icon";

  // w-3/4 mx-auto 
</script>

<section class="space-y-4">
  <div class="card card-compact shadow w-full">
    <div class="card-body">
      <h3 class="card-title">Issues</h3>
      <p>
        Enhance your coding skills by solving real-life issues from open-source
        repositories
      </p>
    </div>
  </div>
  <div class="flex gap-2">
    <div class="grow">
      <div class="card card-compact shadow w-full">
        <div class="card-body">
          <div class="divider">Filter Issues</div>
        </div>
      </div> 
    </div>
    <div class="space-y-2 w-3/4 ">
      {#each issues as issue}
        <div class="card card-compact mx-auto shadow-md">
          <div class="card-body space-y-2">
            <div class="flex w-full items-center justify-between">
              <h3 class="card-title">{issue.title} <div class="badge badge-lg badge-info">NEW!</div></h3>
            </div>
            <p>{issue.title}</p>
            <div class="card-actions justify-end items-end">
              <button class="btn btn-sm btn-primary gap-2"><iconify-icon icon="ri:git-pull-request-line" /> Contribute</button>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
