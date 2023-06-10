<script>
  import "iconify-icon";
</script>

<section class="mx-auto lg:w-3/4 space-y-2">
  <div class="card card-compact bg-white shadow flex space-y-2">
    <div class="card-body">
      <h2 class="card-title gap-2">
        <iconify-icon icon="ri:settings-5-line" /> Settings
      </h2>
      <p>Here, you have full control over customizing your experience and personalizing your account according to your preferences.</p>
    </div>
  </div>
  <div class="flex flex-col md:flex-row w-full gap-2">
    <div class="basis-2/5 grow">
      <div class="card bg-white w-full shadow">
        <ul class="menu bg-transparent w-full">
          <li><a href="/settings/#profile" class="active bg-accent">Edit Profile</a></li>
          <li><a href="/settings/#notifications">Notifications</a></li>
          <li><a href="/settings/#account">Account</a></li>
          <li><a href="/settings/#privacyt">Privacy &amp; Security</a></li>
        </ul>
      </div>
    </div>
    <div class="basis-3/4 space-y-4">
      <div class="card card-compact bg-white w-full shadow">
        <div class="card-body">
          <h3 class="card-title">Basic Info</h3>
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">What is your name?</span>
            </label>
            <input
              type="text"
              placeholder="e.g John Doe"
              class="input input-sm input-ghost input-bordered w-full"
            />
          </div>
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">Email Address</span>
            </label>
            <input
              type="email"
              placeholder="john@doe.xyz"
              class="input input-sm input-ghost input-bordered w-full"
            />
          </div>
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">Bio</span>
            </label>
            <textarea
              class="textarea textarea-ghost textarea-bordered"
              placeholder="Bio"
            />
            <label class="label">
              <span class="label-text-alt">Tell the world about you </span>
            </label>
          </div>
          <div class="flex gap-2">
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">GITHUB (HANDLE)</span>
              </label>
              <input
                type="text"
                placeholder="Your GitHub handle"
                class="input input-sm input-ghost input-bordered w-full"
              />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">LINKEDIN (FULL URL)</span>
              </label>
              <input
                type="text"
                placeholder="Your LinkedIn profile"
                class="input input-sm input-ghost input-bordered w-full"
              />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Blog/ Website</span>
              </label>
              <input
                type="text"
                placeholder="Your blog or website"
                class="input input-sm input-ghost input-bordered w-full"
              />
            </div>
          </div>
          <div class="card-actions justify-end">
            <button class="btn btn-sm btn-primary gap-2">Update Info</button>
          </div>
        </div>
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
  </div>
</section>
