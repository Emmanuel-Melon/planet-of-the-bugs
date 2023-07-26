<script lang="ts">
  export let issues;
  import IssueRecommendaionCard from "./IssueRecommendationCard.svelte";
  import autoAnimate from "@formkit/auto-animate";
</script>

<div class="space-y-2" use:autoAnimate>
  {#each issues as issue}
    <IssueRecommendaionCard {issue} />
  {/each}
</div>
