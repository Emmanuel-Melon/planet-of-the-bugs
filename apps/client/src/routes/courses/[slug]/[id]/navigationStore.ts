// src/stores/navigation.js
import { writable } from "svelte/store";

// Initialize the store with default values
const navigationStore = writable({
  currentChapterIndex: 0,
  currentLessonIndex: 0,
  nextLesson: null,
  previousLesson: null,
});

export default navigationStore;

// Function to update the navigation store based on the current route
export function updateNavigationStore(
  chapters: any[],
  chapterId: any,
  lessonId: any
) {
  const currentChapter = chapters.find(
    (chapter: { id: any }) => chapter.id === chapterId
  );

  const lessons = currentChapter.lessons;

  const currentLesson = lessons.find(
    (lesson: { id: any }) => lesson.id === lessonId
  );

  console.log("current lessons: " + lessons[0]);

  // Index database field start at 1
  const currentChapterIndex = currentChapter.index - 1;
  const currentLessonIndex = currentLesson.index - 1;
  const nextLesson = lessons[currentLessonIndex + 1] || null;
  const previousLesson = lessons[currentLessonIndex - 1] || null;

  navigationStore.set({
    currentChapterIndex,
    currentLessonIndex,
    nextLesson,
    previousLesson,
  });
}
