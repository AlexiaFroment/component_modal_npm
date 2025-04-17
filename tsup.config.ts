import { defineConfig } from "tsup"

export default defineConfig({
  format: ["cjs", "esm"],
  entry: ["./src/index.ts"],
  dts: true,
  shims: true,
  skipNodeModulesBundle: true,
  clean: true,
  // Ajouter ces options pour gérer le CSS
  esbuildOptions(options) {
    options.loader = {
      ...options.loader,
      ".css": "css",
    }
  },
  // Injecter les styles
  injectStyle: true,
})
