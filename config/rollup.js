import buble from "rollup-plugin-buble";
import includePaths from "rollup-plugin-includepaths";

export default {
  input: "src/klakr.js",
  output: {
    file: "dist/klakr.js",
    format: "iife",
    name: "klakr"
  },
  plugins: [
    includePaths({ paths: ["."] }),
    buble()
  ]
};
