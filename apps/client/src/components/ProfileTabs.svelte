<script lang="ts">
  import "iconify-icon";
  type TabItem = {
    label?: string;
    value: number;
    component?: any;
    props?: any;
    icon?: string;
  };
  export let items: TabItem[] = [];
  export let activeTabValue = 1;
  export let icon = "ri:star-line";
  const handleTabClick = (tabValue: TabItem["value"]) => () =>
    (activeTabValue = tabValue);
</script>

<div class="tabs tabs-boxed gap-2 w-full grow rounded-none shadow">
  {#each items as item}
    <button
      class={`tab tab-md gap-2 flex items-center hover:bg-base-100 ${
        activeTabValue === item.value ? "tab-active" : ""
      }`}
      on:click={handleTabClick(item.value)}
      ><iconify-icon icon={item.icon || icon} /> {item.label}</button
    >
  {/each}
  {#each items as item}
    {#if activeTabValue == item.value}
      <div class="w-full gap-2">
        <svelte:component this={item.component} {...item.props} />
      </div>
    {/if}
  {/each}
</div>
