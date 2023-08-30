import { parseFormData, validateFormData } from 'bugs-lib/formData';
import { z } from 'zod';
import { updateCourseChapter } from '$lib/data/courses';
import { fail } from '@sveltejs/kit';

const chapterSchema = z.object({
  courseId: z.string(),
  index: z.number(),
  title: z.string(),
  description: z.string(),
});

export const updateChapterAction = async ({ request }) => {
  const parsedFormData = parseFormData(await request.formData());
  const {
    formData: { courseId, index, title, description },
  } = validateFormData(parsedFormData, chapterSchema);

  try {
    await updateCourseChapter(courseId, parseInt(index), title, description);

    return {
      message: 'Course details updated successfully!',
    };
  } catch (e) {
    console.log(e);
    return fail(400, { message: 'Chapter details updated failed!' });
  }
};

export const deleteChapterAction = async ({ request }) => {};
