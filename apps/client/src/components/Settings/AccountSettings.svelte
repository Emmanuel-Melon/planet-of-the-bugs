<script lang="ts">
  import { Card, Button } from 'svelte-ui';
  const connectGithub = () => {};
  const connectLinkedIn = () => {};

  interface Button {
    CTA: string;
    icon: string;
    requestState: 'idle' | 'processing' | 'completed' | 'failed';
    onClick: () => void;
  }

  let buttons: Button[] = [
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
      <Button
        CTA={buttons[0].CTA}
        icon={buttons[0].icon}
        requestState={buttons[0].requestState}
        on:buttonClick={buttons[0].onClick}
      />
      <Button
        CTA={buttons[1].CTA}
        icon={buttons[1].icon}
        requestState={buttons[1].requestState}
        on:buttonClick={buttons[1].onClick}
      />
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
