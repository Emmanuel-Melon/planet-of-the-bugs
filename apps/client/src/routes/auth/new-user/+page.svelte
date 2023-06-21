<script>
  // @ts-nocheck
  import { page } from "$app/stores";
  import { INSERT_NEW_USER } from "$lib/graphql/mutations/users";
  import { onMount } from "svelte";
  import { mutation } from "svelte-apollo";
  import "iconify-icon";

  let username = "";
  let name = "";
  let email = "";

  let usernamePattern = new RegExp(/^[a-zA-Z][a-zA-Z0-9_-]{3,19}$/);
  let emailPattern = new RegExp(
    /[a-zA-Z0-9_\\.\\+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-\\.]+/
  );

  onMount(() => {
    page.subscribe((value) => {
      const { user } = value.data.session;
      name = user.name;
      email = user.email;
      username = user.username;
    });
  });

  const insertNewUser = mutation(INSERT_NEW_USER);

  async function handleSubmit() {
    if (!usernamePattern.test(username) && !emailPattern.test(email)) {
      return;
    }

    try {
      const result = await insertNewUser({
        variables: {
          email,
          name,
          username,
        },
      });

      if (result.data.insert_users_one) {
        console.log("Mutation successful!");
        window.location.href = `/`;
      } else {
        console.log("Mutation failed");
      }
    } catch (error) {
      console.log(error);
    }
  }
</script>

<section class="space-y-4 p-4">
  <div class="w-fit mx-auto">
    <ul class="steps">
      <li class="step step-primary">Basic Info</li>
      <li class="step step-primary">Background</li>
      <li class="step">Preferences</li>
      <li class="step">Updates & More</li>
    </ul>
  </div>
  <div class="flex justify-center items-center gap-4">
    <div class="card card-compact shadow w-2/5">
      <div class="card-body space-y-2">
        <h2 class="card-title"> Let's Get to Know You!</h2>
        <p>Hey there! To get started on this awesome journey together, we'd love to learn a bit more about you.</p>
        <form class="form-control gap-4 w-full">
          <div>
            <label for="username" class="label">
              <span class="label-text">Username</span>
            </label>
            <input
              id="username"
              type="text"
              bind:value={username}
              on:input={(event) =>
                (username = event.target.value.toLowerCase())}
              pattern={"^[a-zA-Z][a-zA-Z0-9_-]{3,19}$"}
              title="Must start with a letter, have at least 4 characters and contain only letters, numbers, hyphens, or underscores."
              class="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label for="name" class="label">
              <span class="label-text">Full Name</span>
            </label>
            <input
              id="name"
              type="text"
              bind:value={name}
              class="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label for="email" class="label">
              <span class="label-text">Email Address</span>
            </label>
            <input
              id="email"
              type="email"
              bind:value={email}
              on:input={(event) => (email = event.target.value.toLowerCase())}
              class="input input-bordered w-full"
              required
            />
          </div>

          <div class="card-actions justify-end gap-2">
            <button class="btn btn-sm btn-outline gap-2"
              ><iconify-icon icon="ri:close-circle-line" /> Skip</button
            >
            <button class="btn btn-sm btn-primary gap-2" on:click={handleSubmit}
              ><iconify-icon icon="ri:arrow-right-circle-line" /> Continue</button
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
