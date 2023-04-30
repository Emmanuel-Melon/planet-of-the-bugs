import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import monacoEditorPlugin from "vite-plugin-monaco-editor";

const config = {
  // ...
  // TODO: Remove once vite 4.3 is out
  worker: {
    plugins: [
      {
        name: "remove-manifest",
        configResolved(c) {
          const manifestPlugin = c.worker.plugins.findIndex(
            (p) => p.name === "vite:manifest"
          );
          c.worker.plugins.splice(manifestPlugin, 1);
          const ssrManifestPlugin = c.worker.plugins.findIndex(
            (p) => p.name === "vite:ssr-manifest"
          );
          c.plugins.splice(ssrManifestPlugin, 1);
        },
      },
    ],
  },
};
// ..

export default defineConfig({
  plugins: [
    sveltekit(),
  ],
  ...config,
});
