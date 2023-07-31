<script lang="ts">
  export let courses;
  export let user;
  import CourseCard from "$components/CourseCard.svelte";
</script>

<div class="flex items-center justify-center text-center">
  {#if courses.length === 0}
    <div class="gap-2 prose prose-md">
      <figure class="w-1/4 mx-auto">
        <img
          src="https://res.cloudinary.com/dwacr3zpp/image/upload/v1690754757/inspirers/images/empty.png"
          alt="No Course"
        />
      </figure>
      <div>
        <h3 class="text-xl">No courses available.</h3>
        <p>
          Stay tuned for a constellation of captivating courses that will propel
          you to coding mastery.
        </p>
        <div class="divider">Or</div>

        <div class="flex items-center justify-center gap-2">
          <button class="btn btn-sm gap-2"><iconify-icon icon="ri:git-repository-line" /> Explore Repos</button>
          <button class="btn btn-sm btn-outline gap-2"><iconify-icon icon="ri:add-line" /> Author Course</button>

        </div>
      </div>
    </div>
  {:else}
  <div class="space-y-2 ">
    <div class="flex justify-between items-center">
      <h3 class="text-xl">Recommended Courses</h3>
      <div class="flex gap-2">
        <button>Incremeent</button>
        <button>Decremeent</button>
        <button class="btn btn-sm btn-square btn-outline"
          ><iconify-icon icon="ri:arrow-left-double-line" /></button
        >
        <button class="btn btn-sm btn-square btn-outline"
          ><iconify-icon icon="ri:arrow-right-double-line" /></button
        >
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-2">
      {#each courses as course}
        <CourseCard {course} userId={user.id} />
      {/each}
    </div>
  </div>
  {/if}
</div>
