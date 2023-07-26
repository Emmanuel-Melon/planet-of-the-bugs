<script>
  import "iconify-icon";
  import Card from "svelte-ui/components/Card.svelte";
  import { PageHeader } from "svelte-ui";
  import Pagination from "svelte-ui/components/Pagination.svelte";
  import Button from "svelte-ui/components/Button.svelte";
  import autoAnimate from "@formkit/auto-animate";
  const issues = [
    {
      id: 1,
      title: "Analyze and recommend GitHub issues via MindsDB",
      description: "",
      createdAt: "2 July, 2023",
      repo: "planet-of-the-bugs",
      labels: ["backend"],
    },
    {
      id: 2,
      title: "Microsoft Teams working in the same way as Slack",
      description: "",
      createdAt: "4 July, 2023",
      repo: "mindsdB",
      labels: ["integration"],
    },
    {
      id: 3,
      title: "Add Confirmation Dialog for Logout Feature",
      description: "",
      createdAt: "5 July, 2023",
      repo: "todo-react-redux",
      labels: ["bug"],
    },
  ];
</script>

<PageHeader
  heading="BugsHub"
  description="Enhance your coding skills by solving real-life issues from open-source
repositories"
/>

<section class="p-2">
  <div class="flex flex-col justify-center md:flex-row gap-2 mb-4">
    <div class="grow">
      <Card title="Filter Issues">
        <div class="form-control">
          <label class="label cursor-pointer">
            <span class="label-text">Today</span>
            <input type="checkbox" checked class="checkbox checkbox-sm" />
          </label>
        </div>
        <div class="form-control">
          <label class="label cursor-pointer">
            <span class="label-text">React</span>
            <input type="checkbox" checked class="checkbox checkbox-sm" />
          </label>
        </div>
        <div class="form-control">
          <label class="label cursor-pointer">
            <span class="label-text">Flutter</span>
            <input type="checkbox" checked class="checkbox checkbox-sm" />
          </label>
        </div>
      </Card>
    </div>
    <div class="basis-3/5 lg:basis-4/5">
      <div class="flex justify-between items-center space-x-1 py-1 rounded-md">
        <div class="flex gap-2 items-center">
          <h3 class="text-xl">Open Source Bugs</h3>
        </div>
        <div>
          <button class="btn btn-sm btn-square btn-secondary">
            <iconify-icon icon="ri:arrow-left-double-line" />
          </button>
          <button class="btn btn-sm btn-square btn-outline">
            <iconify-icon icon="ri:arrow-right-double-line" />
          </button>
          <button class="btn btn-sm btn-square btn-outline">
            <iconify-icon icon="ri:information-line" /></button
          >
        </div>
      </div>
      <div use:autoAnimate class="space-y-2">
        {#each issues as issue}
          <Card>
            <div
              class="flex flex-wrap flex-grow-0 gap-2 w-full lg:w-fit rounded"
            >
              {#each issue.labels as label}
                <div class="badge badge-outline py-2 text-center">{label}</div>
              {/each}
            </div>
            <div class="flex flex-col w-full items-start justify-between">
              <h2 class="card-title text-bold">
                {issue.title}
              </h2>
              <div
                class="w-full flex justify-between lg:justify-start lg:space-x-8 text-xs"
              >
                <div class="flex items-center justify-center space-x-1">
                  <iconify-icon icon="ri:git-repository-line" />
                  <a href="https://github.com" target="_blank" class="underline"
                    >Planet of the Bugs</a
                  >
                </div>

                <div class="flex items-center justify-center space-x-1">
                  <iconify-icon icon="ri:calendar-todo-line" />
                  <p>14 June, 2023</p>
                </div>
              </div>
            </div>
            <p>{issue.title}</p>

            <div class="card-actions justify-start items-center gap-2">
              <Button
                text="Contribute"
                icon="ri:git-pull-request-line"
                onClick={() => {}}
              />
              <Button
                text="Skip"
                icon="ri:close-line"
                bg="ghost"
                onClick={() => {}}
              />
            </div>
          </Card>
        {/each}
      </div>
    </div>
  </div>
</section>
