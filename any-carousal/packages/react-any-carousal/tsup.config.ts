import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.tsx"],
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  sourcemap: true,
  minify: true,
  external: ["react", "react-dom"],
  injectStyle: true, // To handle the CSS import in carousel.tsx
});
