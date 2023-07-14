<script lang="ts">
  import { onDestroy } from "svelte";
  import "iconify-icon";
  import { selectedItem } from "./store";
  import { Card } from "svelte-ui";

  let selectedItemValue: number;

  const unsubscribe = selectedItem.subscribe((value) => {
    selectedItemValue = value;
  });

  const items = [
    { id: 1, name: "Profile" },
    { id: 2, name: "Account" },
    { id: 3, name: "Notifications" },
  ];

  const handleItemChange = (id: number) => {
    selectedItem.set(id);
  };

  onDestroy(unsubscribe);
</script>

<section class="mx-auto w-11/12 lg:w-3/4 space-y-2 p-2">
  <Card title="Settings">
    <p>
      Here, you have full control over customizing your experience and
      personalizing your account according to your preferences.
    </p>
  </Card>

  <div class="flex flex-col md:flex-row w-full gap-2">
    <div class="basis-2/5 grow">
      <Card>
        <ul class="menu bg-transparent w-full">
          {#each items as { id, name }}
            <li>
              <button
                on:click={() => handleItemChange(id)}
                class={selectedItemValue === id ? "active bg-secondary" : ""}
                >{name}</button
              >
            </li>
          {/each}
        </ul>
      </Card>
    </div>
    <div class="basis-3/4 space-y-4">
      <slot />
    </div>
  </div>
</section>
