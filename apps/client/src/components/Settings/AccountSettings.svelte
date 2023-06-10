<script>
    import { Card } from "svelte-ui";
  </script>
  
  <div class="basis-3/4 space-y-4">
    <Card>
      <div class="card-body">
        <h3 class="card-title">Account</h3>
      </div>
      <div class="card card-compact bg-white w-full shadow">
        <div class="card-body">
          <h3 class="card-title">Delete your public profile</h3>
          <p>
            This will delete your public profile from the website. You can
            recreate your profile at any time, and the only data that will be
            deleted is links to your social profiles.
          </p>
          <div class="card-actions justify-end">
            <button class="btn btn-sm btn-warning gap-2">Delete profile</button>
          </div>
        </div>
      </div>
    </Card>

    <div class="card card-compact bg-white w-full shadow">
        <div class="card-body">
          <h3 class="card-title">Delete account</h3>
          <p>
            This option will eliminate your account entirely with all data. You’ll get a chance to confirm your choice.
          </p>
          <div class="card-actions justify-end">
            <button class="btn btn-sm btn-error gap-2"><iconify-icon icon="ri:delete-bin-7-line"/> Delete account</button>
          </div>
        </div>
      </div>
  </div>
  