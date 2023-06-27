<script lang="ts">
  import { Button, Modal } from 'svelte-ui';
  import Card from 'svelte-ui/components/Card.svelte';

  $: userTopics = ['react', 'svelte', 'node', 'flutter', 'javascript'];

  let userInput = '';
  let availableTopics = [
    'react',
    'svelte',
    'node',
    'flutter',
    'javascript',
    'firebase',
    'redux',
    'docker',
    'github',
    'ai',
    'storage',
  ];
  let filteredTopics: string[] = [];

  const handleInputChange = (event: { target: { value: string } }) => {
    userInput = event.target.value;
    filterAvailableTopics();
  };

  const filterAvailableTopics = () => {
    filteredTopics = availableTopics.filter(
      (topic) =>
        topic.toLowerCase().includes(userInput.toLowerCase()) &&
        !userTopics.includes(topic.toLowerCase())
    );
  };

  const removeTopic = (index: number) => {
    userTopics = [
      ...userTopics.slice(0, index),
      ...userTopics.slice(index + 1),
    ];
  };

  const addTopic = (index: number) => {
    userTopics = [...userTopics, filteredTopics[index]];
    userInput = '';
  };
</script>

<Modal
  CTA=""
  icon="ri:equalizer-line"
  id="manage-topics"
  heading="Repositories Based On These Topics"
  isOutline={true}
>
  <form>
    <Card bg="base-200">
      <div class="flex flex-wrap gap-2">
        {#each userTopics as topic, index}
          <div class="tooltip" data-tip="remove">
            <button
              on:click={() => removeTopic(index)}
              class="btn btn-sm btn-primary lowercase"
            >
              {topic}
            </button>
          </div>
        {:else}
          <p>You don't have any selected topics!</p>
        {/each}
      </div>
    </Card>

    <div class="form-control w-full mt-8">
      <div class="label">
        <span class="label-text text-base">Add Topics</span>
      </div>
      <input
        type="text"
        placeholder="react,javascript,redux"
        class="input input-bordered w-full"
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
                on:click={() => addTopic(index)}>{topic}</button
              >
            </div>
          {/each}
        </div>
      </Card>
    {/if}

    <div class="modal-action flex justify-end">
      <Button CTA="Save Preference" icon="ri:refresh-line" onClick={() => {}} />
    </div>
  </form>
</Modal>
