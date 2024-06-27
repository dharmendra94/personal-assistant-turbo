import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/*.ts", "./src/*.tsx", "./src/**/*.ts", "./src/**/*.tsx"],
  outDir: "./build",
  format: ["esm"],
});
