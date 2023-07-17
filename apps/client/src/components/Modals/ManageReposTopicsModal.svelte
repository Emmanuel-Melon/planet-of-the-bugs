<script lang="ts">
  import { onDestroy, createEventDispatcher } from 'svelte';
  import { Button, Modal } from 'svelte-ui';
  import Card from 'svelte-ui/components/Card.svelte';
  export let user: any;
  export let topics: [];
  export let isProcessing: boolean = false;

  let userTopics = user?.userTopics;
  let userInput = '';
  let filteredTopics: string[] = [];

  const handleInputChange = (event: Event) => {
    userInput = event?.target?.value;
    filterAvailableTopics();
  };

  const filterAvailableTopics = () => {
    filteredTopics = topics.filter(
      ({ name }) =>
        name.toLowerCase().includes(userInput.toLowerCase()) &&
        !userTopics.includes(name.toLowerCase())
    );
  };

  const removeTopic = (index: number) => {
    userTopics = [
      ...userTopics.slice(0, index),
      ...userTopics.slice(index + 1),
    ];
  };

  const addTopic = (index: number) => {
    userTopics = [...userTopics, filteredTopics[index]?.name];
    userInput = '';
  };

  const dispatch = createEventDispatcher();
  const forward = () => {
    dispatch('buttonClick', {
      userTopics,
    });
  };

  onDestroy(() => {
    filteredTopics = [];
    userInput = '';
  });

  $: userTopics;
</script>

<Modal
  CTA=""
  icon="ri:equalizer-line"
  id="manage-topics"
  heading="Manage Topics"
  isOutline={true}
>
  <form class="space-y-2">
    <p>Your current tags:</p>
    <div class="flex flex-wrap gap-2">
      {#each userTopics as topic, index}
        <div class="tooltip" data-tip="remove">
          <button
            on:click={() => removeTopic(index)}
            class="btn btn-sm btn-outline lowercase"
          >
            {topic}
          </button>
        </div>
      {:else}
        <p>You don't have any selected topics!</p>
      {/each}
    </div>

    <div class="form-control w-full mt-8">
      <div class="label">
        <span class="label-text text-base">Add</span>
      </div>
      <input
        type="text"
        placeholder="e.g react, javascript, redux"
        class="input input-sm input-bordered w-full"
        on:input={handleInputChange}
        bind:value={userInput}
      />
    </div>
    {#if filteredTopics.length && userInput.length > 0}
      <Card bg="base-200 mt-1">
        <div class="flex flex-wrap gap-2">
          {#each filteredTopics as topic, index}
            <div class="tooltip" data-tip="add">
              <button
                class="btn btn-sm btn-primary lowercase"
                on:click={() => addTopic(index)}>{topic?.name}</button
              >
            </div>
          {/each}
        </div>
      </Card>
    {/if}
    <div class="modal-action flex justify-start">
      <Button
        CTA="Save Preference"
        icon="ri:refresh-line"
        on:buttonClick={forward}
        {isProcessing}
      />
    </div>
  </form>
</Modal>
