<script>
  import LessonNavigator from "$components/Lessons/lessonNavigator.svelte";

  export let data

</script>


<header>
    <LessonNavigator />
</header>
<main>
  <slot />  
</main>
