import { parseFormData, validateFormData } from "bugs-lib/formData";
import { z } from "zod";
import {
  updateCourseDetails,
  updateCourseChapter,
  updateLessonDetails,
} from "$lib/data/courses";
import { fail } from "@sveltejs/kit";
import slugify from "bugs-lib/slugify";

const courseSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  complexity: z.string(),
  cover: z.string(),
});

const chapterSchema = z.object({
  courseId: z.string(),
  index: z.number(),
  title: z.string(),
  description: z.string(),
});

const lessonSchema = z.object({
  id: z.string(),
  xp: z.number(),
  title: z.string(),
  description: z.string(),
  type: z.string(),
});

export const updateCourseAction = async ({ request }) => {
  const parsedFormData = parseFormData(await request.formData());
  const {
    formData: { id, complexity, title, description, cover },
  } = validateFormData(parsedFormData, courseSchema);

  console.log("data", { id, complexity, title, description });
  try {
    await updateCourseDetails(
      id,
      slugify(title),
      title,
      description,
      complexity,
      cover
    );

    return {
      message: "Course details updated successfully!",
    };
  } catch (e) {
    console.log(e);
    return fail(400, { message: "Course details update failed!" });
  }
};

export const deleteCourseAction = async ({ request }) => {};

export const updateChapterAction = async ({ request }) => {
  const parsedFormData = parseFormData(await request.formData());
  const {
    formData: { courseId, index, title, description },
  } = validateFormData(parsedFormData, chapterSchema);

  try {
    await updateCourseChapter(courseId, parseInt(index), title, description);

    return {
      message: "Chapter details updated successfully!",
    };
  } catch (e) {
    console.log(e);
    return fail(400, { message: "Chapter details update failed!" });
  }
};

export const deleteChapterAction = async ({ request }) => {};

export const updateLessonDetailsAction = async ({ request }) => {
  const parsedFormData = parseFormData(await request.formData());
  const {
    formData: { id, xp, title, description, type },
  } = validateFormData(parsedFormData, lessonSchema);

  try {
    await updateLessonDetails(id, parseInt(xp), title, description, type);

    return {
      message: "Lesson details updated successfully!",
    };
  } catch (e) {
    console.log(e);
    return fail(400, { message: "Lesson details update failed!" });
  }
};

export const deleteLessonAction = async ({ request }) => {};
