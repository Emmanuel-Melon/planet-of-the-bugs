export const load = async ({ params }) => {
  const { lesson } = params;

  return {
    lesson,
  };
};
