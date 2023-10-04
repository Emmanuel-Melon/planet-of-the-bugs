<script lang="ts">
  import 'iconify-icon';
  type TabItem = {
    label?: string;
    value: number;
    component?: any;
    props?: any;
    icon?: string;
  };
  export let items: TabItem[] = [];
  export let activeTabValue = 1;
  export let icon = 'ri:star-line';
  const handleTabClick = (tabValue: TabItem['value']) => () =>
    (activeTabValue = tabValue);
</script>

<div class=" gap-2 w-full grow bg-base-100">
  <div class="w-full flex gap-4 bg-slate-800/60 p-2 rounded-xl">
    {#each items as item}
      <button
        class={` gap-2 flex items-center hover:text-primary ${
          activeTabValue === item.value ? 'bg-neutral text-base-100 px-2 rounded-md' : ''
        }`}
        on:click={handleTabClick(item.value)}
        ><iconify-icon icon={item.icon || icon} /> {item.label}</button
      >
    {/each}
  </div>
  {#each items as item}
    {#if activeTabValue == item.value}
      <div class="w-full gap-2">
        <svelte:component this={item.component} {...item.props} />
      </div>
    {/if}
  {/each}
</div>
