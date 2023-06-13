<script>
  import "iconify-icon";
  const skills = [
    {
      id: 1,
      title: "AI-Generated Bugs",
      description:
        "Harness the power of artificial intelligence to generate realistic code bugs.",
      bg: "bg-emerald-50",
    },
    {
      id: 2,
      title: "Interactive Playground:",
      description:
        "Step into our interactive playground, a safe space where you can experiment, make mistakes, and learn from them.",
      bg: "bg-violet-50",
    },
    {
      id: 3,
      title: "Issue and Repository Recommendations",
      description:
        "Seamlessly connect with GitHub and receive personalized recommendations for issues and repositories tailored to your interests and skill level. ",
      bg: "bg-stone-50",
    },
    {
      id: 4,
      title: "Collaboration Hub",
      description:
        "Connect and collaborate with a vibrant community of developers from around the globe. Share insights, exchange ideas, and work together to tackle complex coding challenges. ",
      bg: "bg-orange-50",
    },
  ];

  const social = [
    {
      id: 1,
      title: "Twitter",
      icon: "ri:twitter-fill",
      link: "",
    },
    {
      id: 2,
      title: "LinkedIn",
      icon: "ri:linkedin-box-fill",
      link: "",
    },
    {
      id: 3,
      title: "GitHub",
      icon: "ri:github-fill",
      link: "",
    },
    {
      id: 4,
      title: "Community",
      icon: "dashicons:buddicons-community",
      link: "",
    },
    {
      id: 5,
      title: "Support",
      icon: "material-symbols:support",
      link: "",
    },
  ];
</script>

<svelte:head>
  <title>About</title>
  <meta name="description" content="About this app" />
</svelte:head>

<section class="mx-auto">
  <div class="flex flex-col lg:flex-row gap-2">
    <div class="basis-2/4 gap-2 grow">
      <div class="card bg-white card-compact shadow">
        <div class="card-body space-y-2">
          <h2 class="card-title">Planet of The Bugs</h2>

          <p class="prose-p">
            The Planet of the Bugs platform uses AI and game mechanics to
            simulate real-world bugs and issues. Developers can practice their
            debugging skills, learn the fundamentals of writing secure software,
            and even receive bug recommendations based on their skills.
          </p>
        </div>
      </div>
    </div>
      <div class="basis-2/4 space-y-2">
        <div class="card bg-white card-compact shadow">
          <div class="card-body">
            <h3 class="card-title">The Problem</h3>
            <p>
              We started with a mission to address the imbalanced ratio
              of issues to pull requests in open-source projects. Our goal is to
              bridge this gap by providing a platform where developers can practice
              and master their debugging skills while contributing to real-world
              projects.
            </p>
          </div>
        </div>
    
        <div class="card bg-white card-compact shadow">
          <div class="card-body">
            <h3 class="card-title">The Solution</h3>
            <p class="prose-p">
              Planet of the Bugs is an AI platform that uses a unique test
              generation engine to generate bug scenarios that are tailored to your
              skill level and area of expertise. The results are an infinite supply
              of unique scenarios, allowing developers to practice and hone their
              debugging skills.
            </p>
          </div>
        </div>
      </div>

  </div>
</section>

<section class="bg-secondary text-white text-center p-4 space-y-2">
  <h3 class="text-xl">How we started?</h3>
  <p>Our journey began as an experiment, initially focused on
    developing a programming language and an online code sandbox. <br />
    However,
    it was after writing an article about debugging and receiving valuable
    feedback that we saw the bigger picture. Open-source companies and
    projects with huge backlogs of bugs and issues are our target
    customers because they need help fixing problems fast; developers who
    got laid off and are eager to level up their skills while earning from
  fixing bugs are also welcome!
  </p>
</section>

<section>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-2 basis-1/2">
    {#each skills as skill}
      <div class={`card basis-2/5 grow card-compact ${skill.bg} shadow-md`}>
        <div class="card-body">
          <h2 class="card-title">{skill.title}</h2>
          <p>{skill.description}</p>
        </div>
      </div>
    {/each}
  </div>
</section>


<section class="bg-base-200">
  <div class="prose prose-sm mt-4 flex flex-col md:flex-row max-w-full">
    <div class="p-8 basis-1/2">
      <h3>Join the Party</h3>
      <p class="card-bordered shadow-sm p-2 w-fit">
        It's like a game! Except your skills will help you write better code.
      </p>
      <p>Export Exercises and Practice Locally!</p>
      <p>
        Connect with Planet of The Bugs across various platforms and be part of
        our buzzing coding community!
      </p>
    </div>
    <div class="flex justify-center items-center flex-wrap gap-2 p-8 basis-1/2">
      {#each social as network}
        <div class="badge badge-lg badge-primary items-center gap-2">
          <iconify-icon icon={network.icon} />
          {network.title}
        </div>
      {/each}
    </div>
  </div>
</section>
