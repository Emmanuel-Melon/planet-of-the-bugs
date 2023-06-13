<script>
  export let user;
  export let image;
  import "iconify-icon";
  import { Button, Card } from "svelte-ui";
  import UserProfileCardControls from "./UserProfileCardControls.svelte";
  const colorMap = {
    isBountyHunter: "pink",
    isCampusExpert: "blue",
    isDeveloperProgramMember: "orange",
    isEmployee: "blue",
    isGitHubStar: "gold",
    isHireable: "green",
  };

  const iconMap = {
    isBountyHunter: "ri:bug-line",
    isCampusExpert: "ri:graduation-cap-line",
    isDeveloperProgramMember: "ri:building-line",
    isEmployee: "ri:briefcase-line",
    isGitHubStar: "ri:star-line",
    isHireable: "ri:check-line",
  };

  function generateBadgeColors() {
    const colors = Object.values(colorMap);
    return colors;
  }

  function extractBooleanProps(user) {
    const booleanObjects = [];
    const colors = generateBadgeColors();

    for (const prop in user) {
      if (typeof user[prop] === "boolean") {
        const label = prop
          .replace(/^is/, "")
          .replace(/([a-z])([A-Z])/g, "$1 $2");
        booleanObjects.push({
          name: prop,
          value: user[prop],
          label,
          bg: `bg-${colorMap[prop]}-500`,
          icon: iconMap[prop],
        });
      }
    }
    return booleanObjects;
  }
  const booleanObjects = extractBooleanProps(user);

  console.log(user);
</script>

<div class="card basis-3/4 grow card-bordered bg-white shadow">
  <div class="card-body space-y-2">
    <div class="flex items-center gap-4">
      <div class="avatar indicator">
        <span class="indicator-item badge badge-lg badge-accent">Hirable</span>
        <div class="w-24 mask mask-squircle shadow">
          <img src={image} alt={user.login} />
        </div>
      </div>
      <div>
        <h2 class="card-title">{user.name}</h2>
        <span class="flex gap-2">
          <p>@{user.username}</p>
          <p class="">
            ({user.pronouns})
          </p>
        </span>
      </div>
    </div>
    <p>{user.bio}</p>
    <UserProfileCardControls {...user} />
    <div class="divider">Basic Info</div>
    <ul class="space-y-2">
      <li>
        <a
          class="link link-hover flex items-center gap-2"
          href={user.websiteUrl}
        >
          <iconify-icon icon="ri:earth-line" />Website</a
        >
      </li>
      <li class="flex items-center gap-2">
        <iconify-icon icon="ri:briefcase-2-line" />
        {user.company}
      </li>
      <li class="flex items-center gap-2">
        <iconify-icon icon="ri:map-pin-user-line" />
        {user.location}
      </li>
      <li class="flex items-center gap-2">
        <iconify-icon icon="ri:cake-line" /> Joined {user.createdAt}
      </li>
      <li>
        <a
          class="link link-hover flex items-center gap-2"
          href={`https://twitter.com/${user.twitterUsername}`}
        >
          <iconify-icon icon="ri:twitter-line" />Twitter</a
        >
      </li>
    </ul>

    <div class="card-actions" />
    <div class="divider">Background Info</div>
    <div class="flex gap-2 flex-wrap">
      {#each booleanObjects as prop}
        {#if prop.value}
          <div class={`badge badge-lg gap-2 ${prop.bg}`}>
            <iconify-icon icon={prop.icon} />
            {prop.label}
          </div>
        {/if}
      {/each}
    </div>
  </div>
</div>
