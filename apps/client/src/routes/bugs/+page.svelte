<script>
  import 'iconify-icon';
  import Card from 'svelte-ui/components/Card.svelte';
  import { PageHeader } from 'svelte-ui';
  import { IconifyIconComponent } from 'iconify-icon';
  import Pagination from 'svelte-ui/components/Pagination.svelte';

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

<section>
  <div class="flex flex-col justify-center md:flex-row gap-4 mb-4 md:space-x-2">
    <div class="grow max-w-lg">
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
    <div class="md:w-3/5">
      <div class="flex justify-end items-center space-x-1 px-2 py-1 bg-base-200 rounded-md">
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
      <div class="space-y-4">
        {#each issues as issue}
          <Card>
            <div class="card-body space-y-2">
              <div class="flex flex-col w-full items-start justify-between">
                <h3 class="card-title text-lg">
                  {issue.title}
                  <div class="badge badge-lg badge-info">NEW!</div>
                </h3>
                <div
                  class="w-full flex justify-between lg:justify-start lg:space-x-8 text-xs"
                >
                  <div class="flex items-center justify-center space-x-1">
                    <iconify-icon
                      icon="ri:git-repository-line"
                      height="15"
                      width="15"
                    />
                    <a
                      href="https://github.com"
                      target="_blank"
                      class="underline">Planet of the Bugs</a
                    >
                  </div>

                  <div class="flex items-center justify-center space-x-1">
                    <iconify-icon
                      icon="ri:calendar-todo-line"
                      height="15"
                      width="15"
                    />
                    <p>14 June, 2023</p>
                  </div>
                </div>
              </div>
              <p>{issue.title}</p>
              <div
                class="flex felx-wrap flex-grow-0 space-x-2 w-full lg:w-fit px-4 py-2 rounded-md bg-base-200"
              >
                <p
                  class="flex-grow-0 px-2 rounded-md text-center bg-yellow-200"
                >
                  Frontend
                </p>
                <p class="flex-grow-0 px-2 rounded-md text-center bg-blue-200">
                  Backend
                </p>
                <p
                  class="flex-grow-0 px-2 rounded-md text-center bg-purple-200"
                >
                  Architecture
                </p>
                <p
                  class="flex-grow-0 px-2 rounded-md text-center bg-orange-200"
                >
                  DOC
                </p>
              </div>
              <div class="card-actions justify-end items-end">
                <button class="btn btn-sm btn-primary gap-2"
                  ><iconify-icon icon="ri:git-pull-request-line" /> Contribute</button
                >
              </div>
            </div>
          </Card>
        {/each}

        <Pagination index={1} pages={{}} />
      </div>
    </div>
  </div>
</section>
