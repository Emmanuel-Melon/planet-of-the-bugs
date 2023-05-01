<script lang="ts">
    type TabItem = {
      label?: string;
      value: number;
      content?: string;
    };
    export let items: TabItem[] = [];
    export let activeTabValue = 1;
    console.log(items);
    const handleTabClick = (tabValue: TabItem["value"]) => () =>
      (activeTabValue = tabValue);
  </script>
  
  <div class="tabs">
    {#each items as item}
      <button
        class={`tab tab-bordered ${
          activeTabValue === item.value ? "tab-active" : ""
        }`}
        on:click={handleTabClick(item.value)}>{item.label}</button
      >
    {/each}
  </div>