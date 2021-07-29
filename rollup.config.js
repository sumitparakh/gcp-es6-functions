import { babel } from "@rollup/plugin-babel";

export default {
  input: "src/index.js",
  output: {
    file: "dist/index.js",
    format: "cjs",
  },
  plugins: [
    babel({
      babelHelpers: "bundled",
      exclude: /node_modules/,
    }),
  ],
};
