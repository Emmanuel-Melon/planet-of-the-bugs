<script lang="ts">
  import { selectedTab } from './selectedTabStore';
  import { Card } from "svelte-ui";
  // /** @type {import('./$types').PageData} */
  export let data;
  let { slug, course } = data;

  let selectedTabValue: number;

  selectedTab.subscribe(value => {
    selectedTabValue = value;
  });

  const tabs = [
    { id: 1, name: 'Course Details' },
    { id: 2, name: 'Chapter Details' },
    { id: 3, name: 'Lesson Details' },
  ];

  const handleTabChange = (id: number) => {
    selectedTab.set(id)
  }

  $: course;
</script>

<section class="mx-auto w-11/12 lg:w-3/4 space-y-2">
  <Card>
    <div class="card-body">
      <h1 class="card-title gap-2">
        <iconify-icon icon="ri:settings-5-line" /> Manage Course
      </h1>
    </div>
  </Card>
  <div class="flex flex-col md:flex-row w-full gap-2">
    <div class="basis-2/5 grow">
      <Card>
        <div class="card-body">
          <ul class="menu bg-transparent w-full">
            {#each tabs as { id, name }}
              <li>
                <button
                  on:click={() => handleTabChange(id)}
                  class={selectedTabValue === id ? 'active bg-secondary' : ''}
                  >{name}</button
                >
              </li>
            {/each}
          </ul>
        </div>
      </Card>
    </div>
    <div class="basis-3/5 grow mb-10">
      <slot />
    </div>
  </div>
  
</section>
<!-- <section>
</section>
<section class="flex flex-col lg:flex-row gap-2">
  <div class="flex flex-col space-y-4 basis-1/4">Course Chapters List</div>
  <div class="basis-3/4 space-y-2">
    <slot />
  </div>
</section> -->
