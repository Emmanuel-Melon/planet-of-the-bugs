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

  // Index database field start at 1
  const currentChapterIndex = currentChapter.index - 1;
  const currentLessonIndex = currentLesson.index - 1;

  let nextLesson = null;
  let previousLesson = null;

  // Check if there's a next lesson in the current chapter
  if (currentLessonIndex + 1 < lessons.length) {
    nextLesson = lessons[currentLessonIndex + 1];
  } else {
    // If there's no next lesson in the current chapter, move to the next chapter
    const nextChapterIndex = currentChapterIndex + 1;

    // Check if there's a next chapter available
    if (nextChapterIndex < chapters.length) {
      const nextChapter = chapters[nextChapterIndex];
      nextLesson =
        nextChapter.lessons.length > 0 ? nextChapter.lessons[0] : null;
    }
  }

  // Check if there's a previous lesson in the current chapter
  if (currentLessonIndex > 0) {
    previousLesson = lessons[currentLessonIndex - 1];
  } else {
    // If there's no previous lesson in the current chapter, move to the previous chapter
    const previousChapterIndex = currentChapterIndex - 1;

    // Check if there's a previous chapter available
    if (previousChapterIndex >= 0) {
      const previousChapter = chapters[previousChapterIndex];
      previousLesson =
        previousChapter.lessons.length > 0
          ? previousChapter.lessons[previousChapter.lessons.length - 1]
          : null;
    }
  }

  navigationStore.set({
    currentChapterIndex,
    currentLessonIndex,
    nextLesson,
    previousLesson,
  });
}
