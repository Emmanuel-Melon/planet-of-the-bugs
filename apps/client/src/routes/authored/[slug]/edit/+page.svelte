<script lang="ts">
  export let data;
  let { slug, course } = data;
  import {selectedTab} from './selectedTabStore'
  import ManageChapterCard from '$components/Chapters/ManageChapterDetails.svelte';
  import ManageCourseDetailsCard from '$components/Courses/ManageCourseDetails.svelte';
  import ManageLessonDetails from '$components/Lessons/ManageLessonDetails.svelte';

  let currentTab: number;

  selectedTab.subscribe(value => {
    currentTab = value - 1;
  });

  const tabs = [
    {
      value: 1,
      component: ManageCourseDetailsCard,
      props: {
        course: course,
      },
    },
    {
      value: 2,
      component: ManageChapterCard,
      props: {
        courseId: course.id,
        chapters: course.course_chapters,
      },
    },
    {
      value: 3,
      component: ManageLessonDetails,
      props: {
        courseId: course.id,
        chapters: course.course_chapters,
      },
    },
   
  ];

  $: currentTab;
</script>

<section>
  <svelte:component this={tabs[currentTab].component} {...tabs[currentTab].props} />
</section>
