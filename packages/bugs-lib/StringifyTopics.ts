export const stringifyTopics = (topics: String[]) => {
  const str:  String = topics.join(',');
  return str;
};

export default stringifyTopics;
