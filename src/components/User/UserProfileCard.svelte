<script>
  export let user;
  export let image;
  import "iconify-icon";
  const colorMap = {
    isBountyHunter: "pink",
    isCampusExpert: "blue",
    isDeveloperProgramMember: "orange",
    isEmployee: "blue",
    isGitHubStar: "gold",
    isHireable: "green",
  };

  const iconMap = {
    isBountyHunter: "heroicons:bug-ant",
    isCampusExpert: "heroicons:academic-cap-20-solid",
    isDeveloperProgramMember: "heroicons:building-office",
    isEmployee: "heroicons:briefcase",
    isGitHubStar: "heroicons:star-20-solid",
    isHireable: "heroicons:check-circle-20-solid",
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

</script>

<div class="card grow bg-white shadow-md">
  <div class="card-body">
    <div class="flex gap-2">
      <div>
        <h2 class="card-title">{user.name}</h2>
        <span class="flex gap-2">
          <a class="link link-accent" href={user.url}>{user.login}</a>
          <p class="">
            ({user.pronouns})
          </p>
        </span>
       <div class="mt-2">
        <button class="btn btn-sm btn-primary gap-2">
          <iconify-icon icon="heroicons:user-plus-solid" /> 
          Follow</button>
        <button class="btn btn-sm btn-secondary gap-2">
          <iconify-icon icon="heroicons:chat-bubble-oval-left"/>
          Message
        </button>
       </div>
      </div>
    </div>
    <div class="divider">Basic Info</div>
    <h1>{user.bio}</h1>

    <ul>
      <li><a class="link link-ghost gap-2 flex items-center" href={user.websiteUrl}>
        <iconify-icon icon="ri:earth-line" />Website</a></li>
      <li class="gap-2 items-center"><iconify-icon icon="ri:briefcase-2-line" />  {user.company}</li>
      <li class="gap-2 items-center"><iconify-icon icon="ri:map-pin-user-line" /> {user.location}</li>
      <li class="gap-2 items-center"><iconify-icon icon="heroicons:clock-solid" /> Joined {user.createdAt}</li>
      <li><a
        class="link link-ghost gap-2 flex items-center"
        href={`https://twitter.com/${user.twitterUsername}`}>
        <iconify-icon icon="ri:twitter-fill" />Twitter</a
      ></li>
    </ul>

    <div class="card-actions" />
    <div class="divider">Background Info</div>
    <div class="flex gap-2 flex-wrap">
      {#each booleanObjects as prop}
        {#if prop.value}
          <div class={`badge badge-lg gap-2 ${prop.bg}`}>
            <iconify-icon icon={prop.icon}/>
            {prop.label}
          </div>
        {/if}
      {/each}
    </div>
  </div>
</div>
