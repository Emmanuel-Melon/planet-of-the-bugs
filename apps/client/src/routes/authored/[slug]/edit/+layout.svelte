<script lang="ts">
  import { onDestroy } from "svelte";
  import { selectedTab } from "./selectedTabStore";
  import { Card } from "svelte-ui";
  // /** @type {import('./$types').PageData} */
  export let data;
  let { course } = data;

  let selectedTabValue: number;

  const unsubscribe = selectedTab.subscribe((value) => {
    selectedTabValue = value;
  });

  const tabs = [
    { id: 1, name: "Course Details" },
    { id: 2, name: "Chapter Details" },
    { id: 3, name: "Lesson Details" },
  ];

  const handleTabChange = (id: number) => {
    selectedTab.set(id);
  };

  $: course;
  onDestroy(unsubscribe);
</script>

<section class="mx-auto w-11/12 lg:w-3/4 space-y-2 p-2">
  <div class="py-2 border-b-2 border-primary space-y-2">
    <h1 class="text-2xl">
      Manage Course
    </h1>
    <p>Here, you have full control over customizing your experience and
      personalizing your account according to your preferences.</p>
  </div>
  <div class="flex flex-col md:flex-row w-full gap-2">
    <div class="basis-2/5 grow">
      <ul class="menu bg-transparent w-full">
        {#each tabs as { id, name }}
          <li>
            <button
              on:click={() => handleTabChange(id)}
              class={selectedTabValue === id ? "active bg-secondary" : ""}
              >{name}</button
            >
          </li>
        {/each}
      </ul>
    </div>
    <div class="basis-3/5 grow mb-10">
      <slot />
    </div>
  </div>
</section>
