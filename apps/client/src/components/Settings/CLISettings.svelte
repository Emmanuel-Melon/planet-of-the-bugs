<script>
  import { Card, Button } from "svelte-ui";
</script>

<Card>
  <div class="card-body space-y-2">
    <h3 class="card-title">API / CLI Token</h3>
    <p>YOUR AUTHENTICATION TOKEN IS:</p>
    <p>How to use this token?</p>
    <div class="card-actions">
      <Button CTA="Reset Token" icon="ri:refresh-line" onClick={() => {}} />
    </div>
  </div>
</Card>
