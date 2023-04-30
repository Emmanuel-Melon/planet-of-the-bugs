export const destructureQueryResults = (queryResult) => {
  console.log(queryResult.data);
  try {
    if (false) {
      const {
        data: { result },
        loading,
      } = queryResult;

      return { result, loading };
    } else {
      const {
        data,
        loading,
      } = queryResult;

      console.log(data);

      return {data, loading };
    }
  } catch (error) {
    throw new Error("Failed to destructures!");
  }
};
