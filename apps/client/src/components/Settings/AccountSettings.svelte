<script lang="ts">
  import { Card, Button } from 'svelte-ui';
  import type { ButtonProps } from 'svelte-ui/Types';
  const connectGithub = () => {};
  const connectLinkedIn = () => {};

  let buttons: ButtonProps[] = [
    {
      CTA: 'Connect GitHub',
      icon: 'ri:github-line',
      requestState: 'idle',
      onClick: connectGithub,
    },
    {
      CTA: 'Connect LinkedIn',
      icon: 'ri:linkedin-box-line',
      requestState: 'idle',
      onClick: connectLinkedIn,
    },
  ];

  $: buttons;
</script>

<div class="basis-3/4 space-y-4">
  <Card title="Password Management">
    <p class="text-neutral">Change or manage your passwords.</p>
    <form>
      <div class="form-control w-full">
        <label class="label" for="old-password">
          <span class="label-text">Old Password</span>
        </label>
        <input
          type="password"
          placeholder="Old Password"
          class="input input-sm input-bordered w-full"
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
          class="input input-sm input-bordered w-full"
          id="new-password"
        />
      </div>
    </form>
    <div class="card-actions justify-start">
      <button class="btn btn-sm btn-primary gap-2"
        ><iconify-icon icon="ri:refresh-line" /> Change Password</button
      >
    </div>
  </Card>

  <Card title="Connected Accounts">
    <p class="text-neutral">Connect your social accounts.</p>
    <div class="flex gap-2">
      {#each buttons as { CTA, icon, requestState, onClick }}
        <Button {CTA} {icon} {requestState} on:buttonClick={onClick} />
      {/each}
    </div>
  </Card>

  <Card title="Delete account">
    <p class="text-neutral">
      This option will eliminate your account entirely with all data. You’ll get
      a chance to confirm your choice.
    </p>
    <div class="card-actions justify-start">
      <button class="btn btn-sm btn-error gap-2"
        ><iconify-icon icon="ri:delete-bin-7-line" /> Delete account</button
      >
    </div>
  </Card>
</div>
