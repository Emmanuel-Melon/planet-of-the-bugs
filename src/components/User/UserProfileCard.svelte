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

        const randomIndex = Math.floor(Math.random() * colors.length);

        console.log(colorMap[prop]);
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

<div class="card w-96 bg-white shadow-md">
  <div class="card-body">
    <div class="flex gap-4">
      <div class="avatar">
        <div class="w-16 rounded-xl ring ring-accent ring-offset-base-100 ring-offset-2">
          <img src={image} alt="user_profile" />
        </div>
      </div>
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

    <div>
      <a class="link link-primary" href={user.websiteUrl}>Website</a>
      <div class="divider divider-horizontal" />
      <a
        class="link link-primary"
        href={`https://twitter.com/${user.twitterUsername}`}>Twitter</a
      >
    </div>

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
