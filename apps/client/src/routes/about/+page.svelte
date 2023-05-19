<script>
    import "iconify-icon";
  const skills = [
    {
      id: 1,
      title: "AI-Generated Bugs",
      description:
        "Harness the power of artificial intelligence to generate realistic code bugs.",
    },
    {
      id: 2,
      title: "Interactive Playground:",
      description:
        "Step into our interactive playground, a safe space where you can experiment, make mistakes, and learn from them.",
    },
    {
      id: 3,
      title: "Issue and Repository Recommendations",
      description:
        "Seamlessly connect with GitHub and receive personalized recommendations for issues and repositories tailored to your interests and skill level. ",
    },
    {
      id: 4,
      title: "Collaboration Hub",
      description:
        "Connect and collaborate with a vibrant community of developers from around the globe. Share insights, exchange ideas, and work together to tackle complex coding challenges. ",
    }
  ];

  const social = [
    {
      id: 1,
      title: "Twitter",
      icon: "ri:twitter-fill",
      link: ""
    },
    {
      id: 2,
      title: "LinkedIn",
      icon: "ri:linkedin-box-fill",
      link: ""
    },
    {
      id: 3,
      title: "GitHub",
      icon: "ri:github-fill",
      link: ""
    },
    {
      id: 4,
      title: "Community",
      icon: "dashicons:buddicons-community",
      link: ""
    },
    {
      id: 5,
      title: "Support",
      icon: "material-symbols:support",
      link: ""
    }
  ];
</script>

<svelte:head>
  <title>About</title>
  <meta name="description" content="About this app" />
</svelte:head>

<section class="flex items-center justify-center mx-auto p-4">
  <div>
    <div
      class="justify-self-center self-center grow prose lg:prose-md w-full mb-4"
    >
      <h1>Planet of The Bugs</h1>
      <p>
        Your ultimate destination for conquering the world of bug hunting and
        software debugging. We're here to empower developers like you,
        regardless of your background or experience level, to become masters in
        squashing bugs and ensuring the smooth operation of your projects.
      </p>
    </div>
    <div class="flex flex-wrap mb-4 gap-2">
      {#each skills as skill}
        <div class="card basis-2/5 min-w-max grow  bg-white shadow-md">
          <div class="card-body prose sm:prose-sm">
            <h2 class="card-title">{skill.title}</h2>
            <p>{skill.description}</p>
          </div>
        </div>
      {/each}
    </div>
    <div class="prose sm:prose-sm">
      <h3>Join the Party</h3>
      <p>Connect with Planet of The Bugs across various platforms and be part of our buzzing coding community!</p>
      <div class="flex gap-4">
        {#each social as network}
          <div class="badge badge-lg badge-outline items-center gap-2">
            <iconify-icon icon={network.icon} />
            {network.title}
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
