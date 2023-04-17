<script>
  export let user;
  export let image;
</script>

<div class="card w-96 bg-base-100 shadow-md">
  <div class="card-body">
    <div class="flex gap-2">
      <div class="avatar">
        <div class="w-16 mask mask-hexagon">
          <img src={image} alt="user_profile" />
        </div>
      </div>
      <div>
        <h2 class="card-title">{user.name}</h2>
        <span class="flex gap-2">
            <a class="link link-primary" href={user.url}>{user.login}</a>
            <p class="">
                ({user.pronouns})
            </p>
        </span>
        <h2 class="card-title"></h2>
      </div>
    </div>
    <div class="divider">Basic Info</div>
    <h1>{user.bio}</h1>

    <div>
        <a class="link link-primary" href={user.websiteUrl}>Website</a>
        <div class="divider divider-horizontal"/>
        <a class="link link-primary" href={`https://twitter.com/${user.twitterUsername}`}>Twitter</a>
    </div>

    <div class="card-actions">

    </div>
  </div>
</div>
