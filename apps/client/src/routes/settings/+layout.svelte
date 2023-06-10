<script>
  import "iconify-icon";
  import { Card } from "svelte-ui";
</script>

<section class="mx-auto lg:w-3/4 space-y-2">
  <Card>
    <div class="card-body space-y-2">
      <h2 class="card-title gap-2">
        <iconify-icon icon="ri:settings-5-line" /> Settings
      </h2>
      <p>
        Here, you have full control over customizing your experience and
        personalizing your account according to your preferences.
      </p>
    </div>
  </Card>

  <div class="flex flex-col md:flex-row w-full gap-2">
    <div class="basis-2/5 grow">
      <Card>
        <ul class="menu bg-transparent w-full">
          <li>
            <a href="/settings/#profile" class="active bg-secondary"
              >Edit Profile</a
            >
          </li>
          <li><a href="/settings/#account">Account</a></li>
          <li><a href="/settings/#notifications">Notifications</a></li>
          <li><a href="/settings/#privacy">Privacy &amp; Security</a></li>
        </ul>
      </Card>
    </div>
    <div class="basis-3/4 space-y-4">
      <slot />
    </div>
  </div>
</section>
