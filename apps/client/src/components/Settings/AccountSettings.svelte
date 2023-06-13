<script>
  import { Button } from "svelte-ui";

  const connectGithub = () => {}
  const connectLinkedIn = () => {}
</script>

<div class="basis-3/4 space-y-4">
  <div class="card card-compact bg-white w-full shadow">
    <div class="card-body">
      <h3 class="card-title">Password Management</h3>
      <p>Change or manage your passwords.</p>
      <form>
        <div class="form-control w-full">
          <label class="label" for="old-password">
            <span class="label-text">Old Password</span>
          </label>
          <input
            type="password"
            placeholder="Old Password"
            class="input input-bordered w-full"
            id="old-password"
          />
        </div>
        <div class="form-control w-full">
          <label class="label" for="new-password">
            <span class="label-text">New Password</span>
          </label>
          <input
            type="password"
            placeholder="New Password"
            class="input input-bordered w-full"
            id="new-password"
          />
        </div>
      </form>
      <div class="card-actions justify-end">
        <button class="btn btn-sm btn-primary gap-2"><iconify-icon icon="ri:refresh-line" /> Change Password</button>
      </div>
    </div>
  </div>

  <div class="card card-compact bg-white w-full shadow">
    <div class="card-body">
      <h3 class="card-title">Social Accounts</h3>
      <p>Connect your social accounts.</p>
      <div class="flex  gap-2">
        <Button CTA="Add GitHub" icon="ri:github-line" onClick={connectGithub} bg="base-200" />
        <Button CTA="Add LinkedIn" icon="ri:linkedin-box-line" onClick={connectLinkedIn} bg="blue-100"/>
      </div>
    </div>
  </div>

  <div class="card card-compact bg-white w-full shadow">
    <div class="card-body">

      <h3 class="card-title">Delete account</h3>
      <p>
        This option will eliminate your account entirely with all data. You’ll
        get a chance to confirm your choice.
      </p>
      <div class="card-actions justify-end">
        <button class="btn btn-sm btn-error gap-2"
          ><iconify-icon icon="ri:delete-bin-7-line" /> Delete account</button
        >
      </div>
    </div>
  </div>
</div>
