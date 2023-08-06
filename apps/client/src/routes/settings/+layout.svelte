<script lang="ts">
  import { onDestroy } from "svelte";
  import "iconify-icon";
  import { selectedItem } from "./store";
  import { Card } from "svelte-ui";
  import autoAnimate from "@formkit/auto-animate";
  const user = getContext("user");

  console.log(user);
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
  <div class="py-2 border-b-2 border-primary space-y-2">
    <h1 class="text-2xl">Settings</h1>
    <p>
      Here, you have full control over customizing your experience and
      personalizing your account according to your preferences.
    </p>
  </div>

  <div class="flex flex-col md:flex-row w-full gap-2">
    <div class="basis-2/5 grow">
        <ul class="menu bg-transparent w-full" use:autoAnimate>
          {#each items as { id, name }}
            <li>
              <button
                on:click={() => handleItemChange(id)}
                class={selectedItemValue === id ? "active bg-secondary border-l-4 border-rose-900" : ""}
                >{name}</button
              >
            </li>
          {/each}
        </ul>
    </div>
    <div class="basis-3/4 space-y-4">
      <slot />
    </div>
  </div>
</section>
