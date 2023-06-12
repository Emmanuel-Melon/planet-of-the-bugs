<script lang="ts">
  import { selectedTab } from './selectedTabStore';
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

<section class="mx-auto w-11/12 lg:w-3/4">
  <div
    class="card bg-white border-b-2 border-double shadow-md border-slate-200 p-4 flex mb-2"
  >
    <h1 class="flex items-center gap-2">
      <iconify-icon icon="ri:settings-5-line" /> Manage Course
    </h1>
  </div>
  <div class="flex flex-col md:flex-row w-full gap-2">
    <div class="basis-2/5 grow">
      <div class="card bg-white w-full border-e shadow-xl p-4">
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
    </div>
    <div class="basis-3/5 grow mb-10">
      <slot />
    </div>
  </div>
  
</section>
