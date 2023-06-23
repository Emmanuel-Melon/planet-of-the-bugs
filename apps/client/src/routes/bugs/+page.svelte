<script>
  import 'iconify-icon';
  import Card from 'svelte-ui/components/Card.svelte';
  import { PageHeader } from 'svelte-ui';
  import Pagination from 'svelte-ui/components/Pagination.svelte';
  import Button from 'svelte-ui/components/Button.svelte';

  const issues = [
    {
      id: 1,
      title: 'Analyze and recommend GitHub issues via MindsDB',
      description: '',
    },
    {
      id: 2,
      title: 'Execute code from Monaco Editor',
      description: '',
    },
    {
      id: 3,
      title: ' Mark Course as Completed',
      description: '',
    },
  ];
</script>

<PageHeader
  heading="BugsHub"
  description="Enhance your coding skills by solving real-life issues from open-source
repositories"
/>

<section class="p-4">
  <div class="flex flex-col justify-center md:flex-row gap-2 mb-4">
    <div class="grow">
      <Card>
        <div class="card card-compact shadow w-full">
          <div class="card-body">
            <div class="divider">Filter Issues</div>

            <div class="form-control">
              <label class="label cursor-pointer">
                <span class="label-text">Today</span>
                <input
                  type="checkbox"
                  checked
                  class="checkbox checkbox-primary"
                />
              </label>
            </div>
            <div class="form-control">
              <label class="label cursor-pointer">
                <span class="label-text">React</span>
                <input
                  type="checkbox"
                  checked
                  class="checkbox checkbox-primary"
                />
              </label>
            </div>
            <div class="form-control">
              <label class="label cursor-pointer">
                <span class="label-text">Flutter</span>
                <input
                  type="checkbox"
                  checked
                  class="checkbox checkbox-primary"
                />
              </label>
            </div>
          </div>
        </div>
      </Card>
    </div>
    <div class="basis-3/5 lg:basis-4/5">
      <div
        class="flex justify-between items-center space-x-1 px-2 py-1 rounded-md"
      >
        <h3>Open Source Bugs</h3>
        <div>
          <button class="btn btn-sm btn-circle btn-secondary">
            <iconify-icon icon="ri:arrow-left-double-line" />
          </button>
          <button class="btn btn-sm btn-circle btn-outline">
            <iconify-icon icon="ri:arrow-right-double-line" />
          </button>
          <button class="btn btn-sm btn-circle btn-outline">
            <iconify-icon icon="ri:information-line" /></button
          >
        </div>
      </div>
      <div class="space-y-4">
        {#each issues as issue}
          <Card>
            <div class="card-body space-y-2">
              <div
              class="flex flex-wrap flex-grow-0 space-x-2 w-full lg:w-fit rounded"
            >
              <div
                class="badge badge-outline py-2 rounded- text-center bg-yellow-200"
              >
                Frontend
              </div>
              <div class="badge badge-outline py-2 rounded- text-center bg-blue-200">
                Backend
              </div>
              <div
                class="badge badge-outline py-2 rounded- text-center bg-purple-200"
              >
                Architecture
              </div>
              <div
                class="badge badge-outline py-2 rounded- text-center bg-orange-200"
              >
                DOC
              </div>
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
                    <a
                      href="https://github.com"
                      target="_blank"
                      class="underline">Planet of the Bugs</a
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
                <Button CTA="Skip" icon="ri:close-line" bg="ghost" onClick={() =>{}} />
                <Button CTA="Contribute" icon="ri:git-pull-request-line" onClick={() =>{}} />
              </div>
            </div>
          </Card>
        {/each}
      </div>
    </div>
  </div>
</section>
