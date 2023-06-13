<script>
  
</script>
<div class="basis-3/4 space-y-4">
    <div class="card card-compact bg-white w-full shadow">
      <div class="card-body">
        <h3 class="card-title">Basic Info</h3>
        <div class="form-control w-full">
          <label class="label" for="name">
            <span class="label-text">What is your name?</span>
          </label>
          <input
            type="text"
            placeholder="e.g John Doe"
            class="input input-sm input-ghost input-bordered w-full"
            id="name"
          />
        </div>
        <div class="form-control w-full">
          <label class="label" for="email">
            <span class="label-text">Email Address</span>
          </label>
          <input
            type="email"
            placeholder="john@doe.xyz"
            class="input input-sm input-ghost input-bordered w-full"
            id="email"
          />
        </div>
        <div class="form-control w-full">
          <label class="label" for="bio">
            <span class="label-text">Bio</span>
          </label>
          <textarea
            class="textarea textarea-ghost textarea-bordered"
            placeholder="Bio"
            id="bio"
          />
          <label class="label" for="bio">
            <span class="label-text-alt">Tell the world about you </span>
          </label>
        </div>
        <div class="flex gap-2">
          <div class="form-control w-full">
            <label class="label" for="github">
              <span class="label-text">GITHUB (HANDLE)</span>
            </label>
            <input
              type="text"
              placeholder="Your GitHub handle"
              class="input input-sm input-ghost input-bordered w-full"
              id="github"
            />
          </div>
          <div class="form-control w-full">
            <label class="label" for="linkedin">
              <span class="label-text">LINKEDIN (FULL URL)</span>
            </label>
            <input
              type="text"
              placeholder="Your LinkedIn profile"
              class="input input-sm input-ghost input-bordered w-full"
              id="linkedin"
            />
          </div>
          <div class="form-control w-full">
            <label class="label" for="blog">
              <span class="label-text">Blog/ Website</span>
            </label>
            <input
              type="text"
              placeholder="Your blog or website"
              class="input input-sm input-ghost input-bordered w-full"
              id="blog"
            />
          </div>
        </div>
        <div class="card-actions justify-end">
          <button class="btn btn-sm btn-primary gap-2">Update Info</button>
        </div>
      </div>
    </div>

  </div>
  