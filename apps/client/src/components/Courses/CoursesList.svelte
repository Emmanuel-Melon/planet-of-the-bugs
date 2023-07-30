<script lang="ts">
  export let courses;
  export let user;
  import CourseCard from "$components/CourseCard.svelte";
</script>

<div class="flex">
  {#if courses.length === 0}
    <div class="flex gap-2 prose prose-md">
        <figure class="w-3/4">
            <img src="https://res.cloudinary.com/dwacr3zpp/image/upload/v1690754757/inspirers/images/empty.png" alt="No Course" />
        </figure>
        <div>
            <h3 class="text-xl">No courses available.</h3>
            <p>Stay tuned for a constellation of captivating courses that will propel you to coding mastery.</p>
        
        </div>
    </div>
  {:else}
  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-2">
    {#each courses as course}
    <CourseCard {course} userId={user.id} />
  {/each}
  </div>
  {/if}
</div>
