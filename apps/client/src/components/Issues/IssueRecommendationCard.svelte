<script lang="ts">
  import { Card, Button } from "svelte-ui";
  export let issue;
</script>

<div>
  <Card>

    <div class="flex flex-col w-full items-start justify-between">
      <div class="flex items-center gap-2">
        <h2 class="card-title text-bold">
          {issue.title}
        </h2>
        <div class="flex flex-wrap flex-grow-0 gap-2 w-full lg:w-fit rounded">
          {#each issue.labels as label}
            <div class="badge badge-outline py-2 text-center">{label}</div>
          {/each}
        </div>
      </div>
      <div
        class="w-full flex justify-between lg:justify-start lg:space-x-8 text-xs"
      >
        <div class="flex items-center justify-center space-x-1">
          <iconify-icon icon="ri:git-repository-line" />
          <a href="https://github.com" target="_blank" class="underline"
            >Planet of the Bugs</a
          >
        </div>

        <div class="flex items-center justify-center space-x-1">
          <iconify-icon icon="ri:calendar-todo-line" />
          <p>14 June, 2023</p>
        </div>
      </div>
    </div>
    <p>{issue.title}</p>

    <div class="card-actions justify-start items-center gap-2">
      <Button
        CTA="Contribute"
        icon="ri:git-pull-request-line"
        onClick={() => {}}
      />
      <Button
        CTA="Skip"
        icon="ri:close-line"
        ButtonType="ghost"
        onClick={() => {}}
      />
    </div>
  </Card>
</div>
