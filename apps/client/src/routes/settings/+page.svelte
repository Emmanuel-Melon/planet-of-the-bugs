<script>
  import "iconify-icon";
</script>

<section class="mx-auto w-3/4">
  <div class="card bg-white border-b-2 border-double shadow-md border-slate-200 p-4 flex mb-2">
    <div>
      <h3 class="flex items-center gap-2">
        <iconify-icon icon="ri:settings-5-line" /> Settings
      </h3>
    </div>
  </div>
  <div class="flex w-full gap-2">
    <div class="basis-1/5 grow">
      <div class="card bg-white w-full border-e shadow-sm p-4">
        <ul class="menu bg-transparent w-full">
          <li><a class="active bg-secondary">Edit Profile</a></li>
          <li><a>Notifications</a></li>
          <li><a>Account</a></li>
          <li><a>Privacy &amp; Security</a></li>
          <li><a>Help &amp; Support</a></li>
        </ul>
      </div>
    </div>
    <div class="basis-3/4">
      <div class="card bg-white w-full border-e shadow-sm">
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
          <div class="card-actions justify-end border-t-2 mt-2 py-2">
            <button class="btn btn-md btn-primary">Save Info</button>
          </div>
        </div>
      </div>
      <div class="card bg-white w-full mt-4 shadow-xl">
        <div class="card-body">
          <h3 class="card-title">Delete your public profile</h3>
          <p>
            This will delete your public profile from the website. You can
            recreate your profile at any time, and the only data that will be
            deleted is links to your social profiles.
          </p>
          <div class="card-actions justify-end">
            <button class="btn btn-md btn-warning">Delete profile</button>
          </div>
        </div>
      </div>
      <div class="card bg-white w-full mt-4 shadow-xl">
        <div class="card-body">
          <h3 class="card-title">Delete account</h3>
          <p>
            This option will eliminate your account entirely with all data. You’ll get a chance to confirm your choice.
          </p>
          <div class="card-actions justify-end">
            <button class="btn btn-md btn-error">Delete account</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
