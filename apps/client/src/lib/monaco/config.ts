export const monacoEditorOptions = (options) => {
  return {
    ...options,
    language: "javascript",
    theme: "vs-dark",
    automaticLayout: true,
    minimap: {
      enabled: false,
    },
    fontFamily: "IBM Plex Mono, monospace",
    fontSize: 16,
    tabSize: 2,
  };
};
