export const destructureQueryResults = (queryResult) => {
  try {
    if (false) {
      const {
        data: { result },
        loading,
      } = queryResult;

      return { result, loading };
    } else {
      const { data, loading } = queryResult;
      return { data, loading };
    }
  } catch (error) {
    throw new Error("Failed to destructures!");
  }
};
